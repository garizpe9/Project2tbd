// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Op } = require("sequelize");
module.exports = function (app) {
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });

  //GET for fish DB
  app.get("/api/fish/", function (req, res) {
    db.fish.findAll({}).then(function (fishPost) {
      res.json(fishPost);
    });
  });
  //Step 1: Get tank size
  app.get("/api/fish/:min_tank?", function(req,res){
    console.log("min tank")
    console.log(req.params)
    db.fish.findAll({
      where: {
        min_tank: {
          [Op.lte]: [parseInt (req.params.min_tank)]
          // This line doesn't restrict fish by tank size^
        } 
      }  
    }).then(function (data) {
      console.log(data);
      return res.json(data)
    })
  });

//Step 2: Get tank size and fish
  app.get("/api/fish/:min_tank?/:group_name?", function(req,res){
    db.fish.findAll({
      where: {
        [Op.and]:
        [
          {min_tank: 
            {[Op.lte]: [req.params.min_tank]}},
          {group_name: req.params.group_name}
        ]
        
      }  
    }).then(function (data) {
      return res.json(data)
    })
  });

 //Step 3: Get tank size and fish aggressive or not?
  app.get("/api/fish/:min_tank?/:group_name?/:aggressive?", function(req,res){
    db.fish.findAll({
      where: {
        [Op.and]:
        [
          {min_tank: 
            {[Op.lte]: [req.params.min_tank]}},
          {group_name: req.params.group_name},
          {aggressive: req.params.aggressive}
        ]
        
      }  
    }).then(function (data) {
      return res.json(data)
    })
  });

  app.get("/api/newfish/", function (req, res) {
    db.emailfish.findAll({}).then(function (fishPost) {
      res.json(fishPost);
    });
  });

  app.post("/api/newfish", function(req, res) {
    var newfish = req.body;
    db.emailfish.create( {
      common_name: newfish.common_name,
      scientific_name: newfish.scientific_name,
      max_size: newfish.max_size,
      temp_low: newfish.temp_low,
      temp_high: newfish.temp_low,
      ph_low: newfish.ph_low,
      min_tank: newfish.min_tank,
      aggressive: newfish.aggressive,
      schooling: newfish.schooling,
      min_group: newfish.min_group,
      ph_high: newfish.ph_high,
      tank_level: newfish.tank_level,
      lifespan: newfish.lifespan,
      image: "null"
    });
    res.status(204).end();
  });

};


// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Op } = require("sequelize");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
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

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
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
          [Op.gte]: [parseInt (req.params.min_tank)]
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
          {[Op.gte]: [req.params.min_tank]}},
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
          {[Op.gte]: [req.params.min_tank]}},
        {group_name: req.params.group_name},
        {aggressive: req.params.aggressive}
      ]
      
    }  
  }).then(function (data) {
    return res.json(data)
  })
});





};

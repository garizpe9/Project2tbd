// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const { Op } = require("sequelize");
//const sendMail = require ("../config/mail");
// require('dotenv').config();
// const nodemailer = require('nodemailer');
// const mailGun = require('nodemailer-mailgun-transport')

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

//   app.post("/email", function(req,res){
//     sendMail(req.body.to, req.body.subject, req.body.text, function(err, data){
//   if (err) {
//     res.status(500).json({message: 'Internal Error'});
//   } else {
//     res.json({message: 'Email Sent!'})
//   }
// });
//})

  // app.post("/email", function(req,res){
  //   const auth = {
  //     auth: {
  //         api_key: process.env.API,
  //         domain: process.env.DOMAIN
  //     }
  //   };
  //   const transporter = nodemailer.createTransport(mailGun(auth));
  //   const sendMail = (email, subject, text, cb) =>{
  //     const mailOptions = {
  //         from: 'Aquarium4noobs@gmail.com',
  //         to: email,
  //         subject: subject,
  //         text: text
  //     };
  //     transporter.sendMail(mailOptions, function(err, data){
  //         if (err) {
  //             cb(err, null);
  //         } else {
  //             cb(null, data);
  //         }
  //     });
  //     sendMail(req.body.to, req.body.subject, req.body.text, function(err, data){
  //       if (err) {
  //         res.status(500).json({message: 'Internal Error'});
  //       } else {
  //         res.json({message: 'Email Sent!'})
  //       }
  //       });
  // } 
  // })
};


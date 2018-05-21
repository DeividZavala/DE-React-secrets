const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const passport = require('passport');

function checkIfLogin(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  return res.status(403).json({message:"no se quien seas"});
}

/* GET home page */
router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password, (err, user)=>{
    if(err) return res.json(err);
    return res.json(user);
  })
});

router.post('/login', 
  passport.authenticate('local'),
   (req,res,next)=>{
    return res.json(req.user);
})

router.get('/logout', (req,res)=>{
  req.logout();
  res.json({message:'adios'});
})

router.get('/private',  checkIfLogin,(req,res)=>{
  res.json({message:"bienvenido " + req.user.username})
})

module.exports = router;

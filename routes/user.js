const express = require('express');
const router = express.Router();
var User = require('../models/user');

 router.get('/fb/:id', function(req, res, next) {
    User.find({facebookId: req.params.id}, function (err, user) {
      if(err){
        res.redirect('http://localhost:4200/home')
        next()       
      } else {
          res.json(user)          
      }     
    })    
})

router.get('/logout', function(req, res, next) {
  req.session.destroy((err) => {
    if(err) return next(err)
  
    req.logout()
  
    res.redirect('http://localhost:4200/home')  // http://localhost:4200
  })
  
  }) 

module.exports = router
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
var Admin = require('../models/admin');
var config = require('../config/database')



 router.post('/pass', function(req, res, next) {
    
    const username = req.body.username
    const password = req.body.password

    Admin.getUserByUsername(username, (err, user) => {
        if(!user) {
            return res.json({success: false, msg:'Ne postoji takav korisnik'})
        }
        
    Admin.comparePassword(password, user.password, (err, isMatch) => {
        if(isMatch){
            const token = jwt.sign({username: username}, config.secret, {                   
                expiresIn : '24h'
            })            
            res.json({
                success: true,
                token: 'JWT ' + token,
                user:  user.username
            })
        } else {
            return res.json({success: false, msg: 'Pogresna sifra'})
        }
    })
    
})
})

module.exports = router
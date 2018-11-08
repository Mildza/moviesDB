const passport = require('passport');
const FacebookStrategy = require('passport-facebook');
const config = require("./database.js")
const User = require('../models/user')

passport.use(new FacebookStrategy({
    clientID: config.FACEBOOK_APP_ID,
    clientSecret: config.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email'],
    enableProof: true
  },(accessToken, refreshToken, profile, cb) => {
    
    User.findOne({facebookId: profile.id})
      .then ((currentUser) => {
        if(currentUser){
          return cb(null, profile);
          } else {
              new User({
              facebookId: profile.id,
              displayName: profile.displayName,
              thumbnail: profile.photos[0].value,
              email: profile.email
              }).save()
              .then((newUser) => done(null, newUser))
          }
      })
      .catch( (error) => {
        throw error
      })
  }
));
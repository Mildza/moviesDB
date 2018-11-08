const router = require('express').Router()
const passport = require('passport')

passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// passport.serializeUser((user, done) => {
//   done(null, user.id)
// })

//  passport.deserializeUser((id, done) => {
//   User.findById(id).then(function(user) {
//     done(null, user);
//   });
// });
  
router.get('/facebook',
passport.authenticate('facebook', { authType: 'rerequest'}));

router.get('/facebook/callback',
passport.authenticate('facebook', { failureRedirect: 'http://localhost:4200/home' }),
function(req, res) {
  if(req.user.id == 10156743273866506){
    var redirectUrl = 'http://localhost:4200/login/' + req.user.id; //http://localhost:4200/login/' // 'login/'
    } else {
      var redirectUrl = 'http://localhost:4200/home';
    }
    res.redirect(redirectUrl)
});
  
module.exports = router;
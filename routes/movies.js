const express = require('express');
const router = express.Router();
var Movie = require('../models/movies');
// const config = require('../config/database')

 router.get('/all', function(req, res, next) {
    Movie.find({}, function (err, movie) {
      if(err){
        next()       
      } else {
          res.json(movie)          
      }     
    })    
})

router.post('/add', (req, res, next) => {
  console.log("radi post")
  let newMovie = new Movie({
    glumci: req.body.actors,
    zanr: req.body.zanr,
    naziv: req.body.movie,
    ocena: req.body.ocena,
    utisak: req.body.komentar
  });
 
  Movie.addMovie(newMovie, err => {
    if(err){
      res.json({success: false, msg:'Failed add Movie'});
    } else {
      res.json({success: true, msg:'Movie added'});
    }
  });
});

router.delete('/delete/:id', function(req, res, next) {
  const id =  req.params.id
  console.log(id)
  Movie.deleteMovie(id, (err) => {
    if(err){
      res.json({success: false, msg:'Delete failed'})
      next()      
    }
    res.json({success: true, msg:'Movie deleted'})
  })     
})

router.post('/find', (req, res, next) => {
  const movieName =  req.body.movieName
  Movie.findMovie(movieName, (err, movie) => {
    if(err) throw err      
    if(movie){
      res.json(movie)  
    } else {
        res.json({success: false, msg:'Ne postoji takav film'});
    } 
  });
});







module.exports = router
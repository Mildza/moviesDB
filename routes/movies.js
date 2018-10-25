const express = require('express');
const router = express.Router();
var Movie = require('../models/movies');

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
  let newMovie = new Movie({
    glumci: req.body.actors,
    zanr: getChecked(req.body.zanr),
    naziv: req.body.movie,
    ocena: req.body.ocena,
    utisak: req.body.komentar
  });
 
  function getChecked(object){
    const entries = Object.entries(object)
    const zanr = []
    for (let key of entries) {
      let x
      if(key[1]) {
        if(key[0] =="trid") {
          x="3d"
        } else if(key[0] =="nisam") {
          x="-"
      } else x=key[0]
        zanr.push(x)
      }      
    }
    return zanr
  }

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


router.post('/update', function(req, res) {
  const movie = {
    id: req.body.id    
  }     
  let newMovie = new Movie({
    naziv: req.body.naziv,
    glumci: req.body.glumci,    
    ocena: req.body.ocena,
    utisak: req.body.komentar,
    zanr: req.body.zanr,
    _id:  req.body.id  
  });
     
    Movie.updateMovie(movie.id, newMovie, err => {
    if(err){
      console.error(err.stack)
      res.json({success: false, msg:'Nije uspeo update'});
    } else {
       newMovie.save
      res.json({success: true, msg:'Film azuriran'});
    }
  })
})


module.exports = router
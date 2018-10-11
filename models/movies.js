const mongoose = require('mongoose');

const Schema = mongoose.Schema({

    glumci: String,
    zanr: [],
    naziv: String,
    ocena: String,
    utisak: String
  });
  
var mlab = "Movie" 
var Movie = "Movie"
  
var Movie = module.exports = mongoose.model(mlab, Schema);

module.exports.addMovie = function(newMovie, callback){    
  newMovie.save(callback);
}


module.exports.findMovie = function(movieName, callback) {
  const query = {naziv: movieName}
  Movie.findOne(query, callback)
}


module.exports.deleteMovie = function(id, callback) {
  const query = {_id: id}  
  Movie.remove(query, callback)  
}
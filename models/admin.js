const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema


const adminSchema = new Schema({
    username: String,
    password: String
});

const Admin = module.exports= mongoose.model('admin', adminSchema)

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    Admin.findOne(query, callback)
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err
        callback(null, isMatch)
    })
}

// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("blabla", salt);
// console.log(hash);


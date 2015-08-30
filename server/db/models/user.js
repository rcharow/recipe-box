var mongoose = require('mongoose')
var db = mongoose.connection

mongoose.connect('mongodb://localhost/recipe-box')
db.on('error',console.error.bind(console, 'MongoDb connection error'))

console.log('DB CONNECTED')

var UserSchema = new mongoose.Schema({
	userName: {type: String},
	password: {type: String},
	facebook: {
        id: String,
        token: String,
        name: String,
        email: String
    }
})

var User = mongoose.model('User',UserSchema)

module.exports = {
	User: User
}
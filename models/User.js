const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    pictureSrc: {
        type: String,
        default: ''
    },
    password: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema)


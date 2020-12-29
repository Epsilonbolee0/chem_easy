const mongoose = require('mongoose')
const Schema = mongoose.Schema

const themeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    author: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
})

module.exports = mongoose.model('themes', themeSchema)


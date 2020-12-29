const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('tags', tagSchema)

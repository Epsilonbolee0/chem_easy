const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    theme: {
        ref: 'themes',
        type: Schema.Types.ObjectId
    },
    author: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },

    tags: [
        {
            type: Number
        }]
})

module.exports = mongoose.model('tasks', taskSchema)

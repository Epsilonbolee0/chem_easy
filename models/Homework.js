const mongoose = require('mongoose')
const Schema = mongoose.Schema

const homeworkSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
        unique: true
    },
    id: {
        type: Number,
        required: true
    },
    list: [
        {
            name: {
                type: String
            },
            difficulty: {
                type: Number
            },

            tags: [
                {
                    type: Number
                }]
        }],
    password: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('homeworks', homeworkSchema)

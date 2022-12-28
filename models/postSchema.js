const post = require("./post")

const Schema = require("mongoose").Schema

const postSchema = new Schema({
    username: {type: String, required: true},
    text: {type: String, required: true},
    likes: {type: Number, default: 0 },
    comments: {type: String, required: true},
    url: {type: String},
    wigs: {type: String}
}, {
    timestamps: true
})

module.exports = postSchema
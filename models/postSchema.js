const post = require('./post')

const Schema = require('mongoose').Schema

const postSchema = new Schema({
  username: { type: String, required: true },
  post: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: { type: Schema.Types.ObjectId, ref: 'Comments' },
  url: { type: String },
  wigs: { type: String }
}, {
  timestamps: true
})

module.exports = postSchema

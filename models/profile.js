const { model, Schema } = require('mongoose')

const profileSchema = new Schema({
  email: { type: String, required: true },
  dob: { type: Number, required: true },
  photo: Image,
  interests: { type: String },
  username: { type: String, required: true }
  // add posts here
  //wigs
})

const Profile = model('Profile', profileSchema)

module.exports = Profile

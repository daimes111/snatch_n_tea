const Post = require('../../models/post')

module.exports = {
  index,
  destroy,
  update,
  create,
  show,
  jsonPosts,
  jsonPost
}

function jsonPosts (req, res) {
  res.json(res.locals.data.posts)
}
function jsonPost (req, res) {
  res.json(res.locals.data.post)
}

async function create (req, res, next) {
  try {
    const post = await Post.create(req.body)
    console.log(post)
    res.locals.data.post = post
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function index (req, res, next) {
  try {
    const posts = await Post.find({})
    console.log(posts)
    res.locals.data.posts = posts
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function destroy (req, res, next) {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    res.locals.data.post = post
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function update (req, res, next) {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    console.log(post)
    res.locals.data.post = post
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function show (req, res, next) {
  try {
    const post = await Post.findById(req.params.id)
    console.log(post)
    res.locals.data.post = post
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

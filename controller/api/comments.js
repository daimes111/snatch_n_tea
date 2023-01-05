const Comment = require('../../models/comment')

module.exports = {
  create,
  index,
  destroy,
  update,
  show,
  jsonComment,
  jsonComments
}

function jsonComment (req, res) {
  res.json(res.locals.data.comment)
}
function jsonComments (req, res) {
  res.json(res.locals.data.comments)
}

async function create (req, res, next) {
  try {
    const comment = await Comment.create(req.body)
    console.log(comment)
    res.locals.data.comment = comment
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function index (req, res, next) {
  try {
    const comments = await Comment.find({})
    console.log(comments)
    res.locals.data.comments = comments
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function destroy (req, res, next) {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)
    console.log(comment)
    res.locals.data.comment = comment
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function update (req, res, next) {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    console.log(comment)
    res.locals.data.comment = comment
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

async function show (req, res, next) {
  try {
    const comment = await Comment.findById(req.params.id)
    console.log(comment)
    res.locals.data.comment = comment
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

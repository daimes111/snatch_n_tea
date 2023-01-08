const Comment = require('../../models/comment')
const Post = require("../../models/post")

module.exports = {
  create,
  index,
  destroy,
  update,
  show,
  jsonComment,
  jsonComments
}

function jsonComment(req, res) {
  res.json(res.locals.data.comment)
}
function jsonComments(req, res) {
  res.json(res.locals.data.comments)
}

async function create (req, res, next) {
  try {
    const comment = await Comment.create(req.body)
    console.log(comment)
    res.locals.data.comment = comment
    try{
      const post = await Post.findByIdAndUpdate(req.params.postId, {$push: {comments: comment._id}})
      res.locals.data.post = post
      } catch(err){
      res.status(400).json({ msg: err.message })
    }

    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

// const create = {
//   create(req, res, next) {
//     Comment.create(req.body, (err, createdComment) => {
//       if (err) {
//         res.status(400).send({
//           msg: err.message,
//         })
//       } else {
//         Post.findByIdAndUpdate(req.params.postId, { $push: { comments: createdComment._id } }, (err, foundPost) => {
//           if (err) {
//             res.status(400).send({
//               msg: err.message,
//             })
//           } else {
//             res.locals.data.post = foundPost
//             next()
//           }
//         })
//       }

//     })
//   }
// }

async function index(req, res, next) {
  try {
    const comments = await Comment.find({})
    console.log(comments)
    res.locals.data.comments = comments
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function destroy(req, res, next) {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id)
    console.log(comment)
    res.locals.data.comment = comment
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}
async function update(req, res, next) {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    console.log(comment)
    res.locals.data.comment = comment
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

async function show(req, res, next) {
  try {
    const comment = await Comment.findById(req.params.commentId)
    console.log(comment)
    res.locals.data.comment = comment
    next()
  } catch (err) {
    res.status(400).json({ msg: err.message })
  }
}

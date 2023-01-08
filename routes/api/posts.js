const express = require('express')
const router = express.Router()

const postsCon = require('../../controller/api/posts')

router.get('/', postsCon.index, postsCon.jsonPosts)
router.delete('/:id', postsCon.destroy, postsCon.jsonPost)
router.put('/:id', postsCon.update, postsCon.jsonPost)
router.post('/', postsCon.create, postsCon.jsonPost)
router.get('/:postId', postsCon.getPost, postsCon.jsonPost)

module.exports = router

const express = require('express')
const router = express.Router()

const postsCon = require('../../controller/api/posts')

router.get('/', postsCon.index, postsCon.jsonPosts)
router.delete('/:postId', postsCon.destroy, postsCon.jsonPost)
router.put('/:postId', postsCon.update, postsCon.jsonPost)
router.post('/', postsCon.create, postsCon.jsonPost)
router.get('/:postId', postsCon.show, postsCon.jsonPost)

module.exports = router

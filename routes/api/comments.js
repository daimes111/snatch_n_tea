const express = require('express')
const router = express.Router()
const commentCon = require('../../controller/api/comments')

router.get('/:postId', commentCon.index, commentCon.jsonComments)
router.delete('/:postId/:id', commentCon.destroy, commentCon.jsonComment)
router.put('/:postId/:id', commentCon.update, commentCon.jsonComment)
router.post('/:postId', commentCon.create, commentCon.jsonComment)
router.get('/:commentId', commentCon.show, commentCon.jsonComment)

module.exports = router

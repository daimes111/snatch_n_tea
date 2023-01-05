const express = require('express')
const router = express.Router()
const commentCon = require('../../controller/api/comments')

router.get('/', commentCon.index, commentCon.jsonComments)
router.delete('/:id', commentCon.destroy, commentCon.jsonComment)
router.put('/:id', commentCon.update, commentCon.jsonComment)
router.post('/', commentCon.create, commentCon.jsonComment)
router.get('/:id', commentCon.show, commentCon.jsonComment)

module.exports = router

const express = require('express')
const router = express.Router()

const articleAdminController = require('../../controllers/admin/article')

router.get('/edit/:id', articleAdminController.updateArticle)
router.post('/edit/:id', articleAdminController.updateArticle)

module.exports = router
const router = require('koa-router')()
const Controllers = require('../../controller.js')

router.prefix('/api')

router.get('/', Controllers.ApiArticle.index())

module.exports = router;

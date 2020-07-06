const router = require('koa-router')()
const Controllers = require('../controller.js')

router.get('/', Controllers.Home.index())

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

const BaseController = require('./base.controller.js')

class HomeController extends BaseController {
	
	constructor(arg = null) {
		super(arg)
	}
	
	index(ctx, next) {
		return async (ctx, next)=>{
			let list = await this.Model.Article.getAll()
			await ctx.render('index', {
				title: '文章列表',
				list
			})
		}
	}
}

module.exports = new HomeController();
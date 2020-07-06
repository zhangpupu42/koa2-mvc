const BaseController = require('../base.controller.js')

class Article extends BaseController {
	
	constructor(arg='') {
	    super(arg);
	}
	
	index(ctx,next){
		return async (ctx,next)=>{			
			ctx.response.status = 200;
			ctx.response.type='application/json';
			ctx.response.body = {title:'api response title'}
			await next();
		}
	}
	
}
module.exports = new Article();
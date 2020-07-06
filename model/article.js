const BaseModel = require('./base.model.js')

let table = 'article'

class ArticleModel extends BaseModel {
	
	constructor(arg = null) {
	    super(arg)
	}
	
	async getAll(){
		let data = await this.model.findAll()
		console.log('this.mbbb',this.mbbb)
		return data;
	}
	
}

module.exports = new ArticleModel({table});
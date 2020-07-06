const BaseModel = require('./base.model.js')

let table = 'user'

class UserModel extends BaseModel {
	
	constructor(arg = null) {
	    super(arg)
	}
	
	async getModel(){
		let data = await this.model.findAll()
		return data;
	}
	
}

module.exports = new UserModel({table});
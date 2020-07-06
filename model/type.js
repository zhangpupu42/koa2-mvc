const BaseModel = require('./base.model.js')

let table = 'type'

class TypeModel extends BaseModel {
	
	constructor(arg = null) {
	    super(arg)
	}
	
	async getModel(){
		let data = await this.model.findAll()
		return data;
	}
	
}

module.exports = new TypeModel({table});
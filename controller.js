const fs = require('fs');
const path = require('path');
const {
	controller
} = require('./config/config.js').base
class Controller {

	constructor(dir = 'controller') {

		this.dir = dir;

		this.filePath = path.join(__dirname, dir);

		this.loadController(this.filePath);

	}

	loadController(filePath) {

		const files = fs.readdirSync(filePath);

		files.filter(f => {
				return f !== 'base.controller.js'
			})
			.forEach(file => {

				let newFilePath = path.join(filePath, file);

				if (fs.statSync(newFilePath).isDirectory()) { // 是目录

					this.loadController(newFilePath); // 递归

				} else { // 是文件

					if (file.endsWith('.js')) {

						let controller = require(newFilePath);

						this.setController(newFilePath, controller);

					}


				}

			})

	}

	setController(filePath, controller) {

		let variable = this.dealPathToVariable(filePath);

		this[variable] = controller;

	}

	dealPathToVariable(filePath) {
		let tagStr = this.dir;
		let index = filePath.indexOf(tagStr),
			len = tagStr.length;
		let start = index + len + 1;
		filePath = filePath.slice(start, -3);
		let arr = filePath.split(/[\\\/]/);
		let variable = '';
		arr.forEach(el => {
			variable += el.replace(/^[a-zA-Z]{1}/, (m) => {
				return m.toUpperCase();
			})

		})

		return variable
	}

}
module.exports = new Controller(controller);

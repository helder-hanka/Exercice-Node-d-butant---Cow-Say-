const myInformation = require('./information')
const chalk = require('chalk')
console.log(chalk.blue('Hello, npm!'))

var cowsay = require("cowsay");

console.log(cowsay.say({
	text :chalk.blue(`Hello, I'm ${myInformation.firstName} ${myInformation.lastName} from capus ${myInformation.campus}`) ,
	e : "oO",
	T : "U "
}));

// or cowsay.think()


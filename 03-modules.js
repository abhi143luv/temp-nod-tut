// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const person = require('./06-alternative-flavor')

console.log(person)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

require("./07-mind-grenade")

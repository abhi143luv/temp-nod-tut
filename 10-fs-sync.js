const { readFileSync, writeFileSync, write } = require('fs')

console.log('start');
const first = readFileSync('./content/firstFile.txt', 'utf-8')
const second= readFileSync('./content/secondFile.txt', 'utf-8')
console.log(first);
console.log(second);

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {
    flag : "w",
    encoding : "utf-8"
})
console.log('done with the task');
console.log('starting the next one');

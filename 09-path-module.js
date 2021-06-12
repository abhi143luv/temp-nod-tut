const path = require('path')

console.log(path.sep)

const filePath = path.join('content','subfolder','text.txt')
console.log(filePath)

console.log(path.basename(filePath))

absPath = path.resolve('content','subfolder', 'text.txt')
console.log(absPath);

console.log(path.extname(filePath));

console.log(path.isAbsolute(absPath));

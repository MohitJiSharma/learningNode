const path = require('path');

console.log(path.sep);

const filePath = path.join('content', 'generic', 'hello.txt');

console.log(filePath);

const basename = path.basename(filePath);

console.log(basename);

const absPath = path.resolve(__dirname, 'content', 'generic', 'hello.txt');
console.log(absPath);
const {readFileSync, writeFileSync} = require('fs');

//Read file

const firstFileContent = readFileSync('./content/hello.txt', 'utf-8');
console.log('First file content: ',firstFileContent);

const secondFileContent = readFileSync('./content/generic/Hello2.txt', 'utf-8');
console.log('Second file content: ',secondFileContent);

//Write files 
const newFile = writeFileSync('./content/generic/codegenfile.txt', `Appending now`, {flag:'a'});
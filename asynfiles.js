const {readFile, writeFile} = require('fs');

const readAsynFile = readFile('./content/hello.txt','utf8',(err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const firstFile = result;
    const readSecondFileAsyn = readFile('./content/generic/Hello2.txt','utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const secondFile = result;
    const writeAsynFile = writeFile('./content/asynfile.txt', `Asyn file ${firstFile} ${secondFile}`, (err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File written");
})
})




});
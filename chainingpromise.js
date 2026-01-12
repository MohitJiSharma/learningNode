const {readFile} = require('fs');

//I need to create and return a promise

const getText = (path) => {
    console.log(path);
    return new Promise((resolve, reject) =>{
        readFile(path, 'utf8', (err, result) => {
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

getText('./content/hello.txt').then((data) => {
    console.log("file1",data);
       return getText('./content/generic/Hello2.txt').then((data) =>{
            console.log("file2:",data);
        }); // return the next promise console.log(data);
    })
    .catch((err) => console.error(err));



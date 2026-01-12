const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        console.log("In home");
        res.end('Welcome to our home page');
        
    }
    else if(req.url === '/about'){
        res.end('We are Best!');
    }else{
        res.end(`<h1>No page found</h1> <href=/>`)

    }
    
})

const PORT = 5000;

server.listen(PORT);
const http = require("http");
const fs = require("fs");
const PORT = 2000;
const hostname = "localhost"; 
const home = fs.readFileSync("./index.html","utf-8");
 
const server = http.createServer((req,res) => {
   // console.log(req.url);
    if(req.url === "/"){
        res.end(home);   
    }
    else if(req.url === "/about"){
        res.end("<h1>hello from the about sides</h1>");
    }
    else if(req.url === "/contact"){
        res.end("<h1>hello from the contact side</h1>");
    }
    /*else if(req.url === "/userapi"){
        fs.readFile(`${__dirname}/userApi/userapi.json`,"utf-8", (err,data) =>{
            console.log(data);
            const objData = JSON.parse(data);
            res.end(objData[1].name);
        });
    
    }*/
    else{
        res.end("404 error page page doesn't exit"); 
    }
});

 server.listen(PORT,hostname, ()=>{
    console.log(`listening to the port no http://${hostname}:${PORT}`);
 });
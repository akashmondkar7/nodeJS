const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
    
//===================================
let collectHeaderData;
fs.readFile("html/header.html", "utf-8", (error, headerData) => {
      if (error) {
        resp.writeHead(500, { "Content-type": "text/plain" });
        resp.end("internal server error");
        return false;
      }

      collectHeaderData=headerData
        // resp.write(headerData);
        // resp.end();
      
    });






//=====================================








    if(req.url=='/'){
 
        
    fs.readFile("html/web.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "Content-type": "text/plain" });
        resp.end("internal server error");
        return false;
      }
        resp.write(collectHeaderData+""+data);
        resp.end();
      
    });
    }else if(req.url=='/style.css'){
        
    fs.readFile("html/style.css", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, { "Content-type": "text/plain" });
        resp.end("css not found");
        return false;
      }
        resp.writeHead(200, { "Content-type": "text/css" });
        
        resp.end(data);
      
    });
    }


  }).listen("3003");

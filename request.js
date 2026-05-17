 const http = require('http')

 const server =http.createServer((req,resp)=>{
  console.log(req);



    resp.write("home page")
    resp.end();

 }).listen(5804)
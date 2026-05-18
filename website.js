const http = require('http');

const server =http.createServer((req,resp)=>{
    resp.write("page check")
    resp.end();


}).listen("3003")
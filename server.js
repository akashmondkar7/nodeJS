const http =require('http');
http.createServer((req ,resp)=>{
   resp.write("<h1>AKash</h1>")
   
    resp.end("hello")

}).listen(4801);
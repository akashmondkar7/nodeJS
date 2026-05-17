const http =require("http")

const userData=[
    {
        name:'akash',
        age:'25',
        email:'Akash@gmail.com'
    },
     {
        name:'prakash',
        age:'28',
        email:'prakash@gmail.com'
    },
     {
        name:'vikas',
        age:'28',
        email:'vikas@gmail.com'
    },
]

http.createServer((req,resp)=>{
resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData))
    resp.end();

}).listen(4802)
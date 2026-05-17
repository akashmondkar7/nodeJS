const http = require("http");

const server = http
  .createServer((req, resp) => {
    resp.setHeader("Content-type", "text/html");
    resp.write(`

    <html>
    <head>
    <title>node js server</title>
    </head>
    <body>
<h1>Hello akash</h1>
<img  src="https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg"></img>
    </body>
    </html>

    
    `);

    resp.end();
  })

  .listen("4800");

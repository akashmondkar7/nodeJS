const http = require("http");
const userForm = require("./userForm.js");
const userDataSubmit = require("./userDataSubmit.js");

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-type": "text/html" });
    if (req.url == "/") {
      userForm(req, resp);
    } else if (req.url == "/submit") {
      userDataSubmit(req,resp);
    }

    resp.end();
  }).listen(3908);

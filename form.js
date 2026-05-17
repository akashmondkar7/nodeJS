const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

http
  .createServer((req, resp) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        resp.writeHead(500, {
          "Content-type": "text/plain",
        });

        resp.end("internal server error");

        return;
      }

      if (req.url == "/") {
        resp.writeHead(200, {
          "Content-type": "text/html",
        });

        resp.write(data);

        resp.end();
      } else if (req.url == "/submit" && req.method == "POST") {
        let dataBody = [];

        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          let rawData = Buffer.concat(dataBody).toString();

          console.log(rawData);

          let readableData = querystring.parse(rawData);

          console.log(readableData);

          let dataString =
            "My name is " +
            readableData.name +
            " and my email id is " +
            readableData.email;

          console.log(dataString);
          fs.writeFileSync(
            "text/" + readableData.name + ".txt",
            dataString,
            "utf-8",
            (err) => {
              if (err) {
                resp.end("internal server error");
                return false;
              } else {
                console.log("file created");
              }
            },
          );

          resp.writeHead(200, {
            "Content-type": "text/html",
          });

          resp.write("<h1>Data Submitted</h1>");

          resp.end();
        });
      }
    });
  })
  .listen(4848);

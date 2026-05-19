const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {

    // Reusable Header
    let collectHeaderData = fs.readFileSync(
        "html/header.html",
        "utf-8"
    );

    // Home Route
    if (req.url == '/') {

        fs.readFile("html/web.html", "utf-8", (error, data) => {

            if (error) {

                resp.writeHead(500, {
                    "Content-type": "text/plain"
                });

                resp.end("Internal Server Error");

                return;
            }

            resp.writeHead(200, {
                "Content-type": "text/html"
            });

            resp.end(collectHeaderData + data);

        });

    }

    // CSS Route
    else if (req.url == '/style.css') {

        fs.readFile("html/style.css", "utf-8", (error, data) => {

            if (error) {

                resp.writeHead(404, {
                    "Content-type": "text/plain"
                });

                resp.end("CSS Not Found");

                return;
            }

            resp.writeHead(200, {
                "Content-type": "text/css"
            });

            resp.end(data);

        });

    }

}).listen(3003);

console.log("Server running on port 3003");
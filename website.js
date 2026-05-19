const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {

    let files = "/web";

    if (req.url != '/') {
        files = req.url;
    }

    // Reusable Header
    let collectHeaderData = fs.readFileSync(
        "html/header.html",
        "utf-8"
    );

    // HTML Pages
    if (req.url != '/style.css') {

        fs.readFile(`html${files}.html`, "utf-8", (error, data) => {

            if (error) {

                resp.writeHead(404, {
                    "Content-type": "text/plain"
                });

                resp.end("Page Not Found");

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
const http = require("http");

function handleServer(request, response) {
  if (request.url === "/currentTime") {
    response.statusCode = 200;
    response.end(
      "<h1>" +
        new Intl.DateTimeFormat("ko", {
          hourCycle: "h23",
          dateStyle: "short",
          timeStyle: "short",
        }).format() +
        "</h1>"
    );
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}

const server = http.createServer(handleServer);

server.listen(3000);

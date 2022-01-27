const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/friends") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        id: 1,
        name: "pasindu",
        message: "hello !",
      })
    );
  }

  if (req.url === "/messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hi Pasindu</li>");
    res.write("<li>How are you ? </li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

//127.0.0.1=>localhost

server.listen(PORT, () => {
  console.log(`listening on port : ${PORT} ....`);
});

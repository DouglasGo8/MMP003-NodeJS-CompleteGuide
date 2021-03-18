import http from "http";
import "@babel/polyfill";
//
import html from "./data";

//

const server = http.createServer();

// Listen the Request Event
server.on("request", async (req, res) => {
  //
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  //
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end(await html());
});

//
server.listen(3000);

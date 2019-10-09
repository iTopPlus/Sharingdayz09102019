const EventEmitter = require("eventemitter3");
const emitter = new EventEmitter();
const express = require("express");
const cors = require("cors");
const app = express();
const subscribe = (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive"
  });
  const onMessage = data => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }
  emitter.on("message", onMessage);
  req.on("close", function() {
      emitter.removeListener("message", onMessage);
  });
}

const publish = (req, res) => {
  emitter.emit("message", req.body);
  res.json({ message: "success" });
}
app.use(cors());
app.use(express.json());
app.post("/", publish);
app.get("/", subscribe);
app.listen(3987, () => {
  console.log("APP START !!!");
});
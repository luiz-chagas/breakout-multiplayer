import io from "socket.io";
import http from "http";
import { app } from "./express";
import { makeSocketServer } from "./services/socket";

const port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
const socketServer = io(server, {
  transports: ["websocket"],
});

makeSocketServer(socketServer);

const onError = (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  console.log(`Listening on ${bind}`);
};

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

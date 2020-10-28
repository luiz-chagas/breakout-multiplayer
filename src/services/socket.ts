import { Server } from "socket.io";
import { createGame } from "./game";

export const makeSocketServer = (socketServer: Server) => {
  // const game = createGame();

  socketServer.on("connect", (socket) => {
    if (!socket.request.headers.origin) {
      return;
    }

    console.log(`New Player: ${socket.id}`);

    socket.on("disconnect", () => {
      console.log(`Good Bye: ${socket.id}`);
    });

    socket.on("error", () => {
      console.log(`Good Bye: ${socket.id}`);
    });
  });
};

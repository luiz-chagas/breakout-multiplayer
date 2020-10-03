import express from "express";
import { createGame } from "./services/game";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

const game = createGame({
  radius: 1,
  velocityX: 0,
  velocityY: -10,
  x: 50,
  y: 99,
});

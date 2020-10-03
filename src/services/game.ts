import { GameState, Player, Ball, Brick } from "../types/GameState";

const WIDTH = 100;
const HEIGHT = 100;

// const addPlayer = (context: GameState, player: Player) => {
//   context.players.push(player);
// };

const addBall = (context: GameState, ball: Ball) => {
  context.balls.push(ball);
};

// const removePlayer = (player: Player) => {
//   state.players.splice(state.players.indexOf(player), 1);
// };

// const removeBrick = (brick: Brick) => {
//   state.bricks.splice(state.bricks.indexOf(brick, 1));
// };

const removeBall = (context: GameState, ball: Ball) => {
  context.balls.splice(context.balls.indexOf(ball, 1));
};

// const onBrickHit = (brick: Brick, ball: Ball) => {
//   if (brick.health === 1) {
//     removeBrick(brick);
//   } else {
//     brick.health -= 1;
//   }

//   ball.velocityX;
// };

const handleWallHit = (context: GameState, ball: Ball) => {
  const left = ball.x - ball.radius;
  const right = ball.x + ball.radius;
  const top = ball.y - ball.radius;
  const bottom = ball.y + ball.radius;

  if (left < 0) {
    ball.velocityX = -ball.velocityX;
    ball.x = -ball.x;
  }
  if (right > WIDTH) {
    ball.velocityX = -ball.velocityX;
    ball.x = WIDTH - (right - WIDTH);
  }
  if (top < 0) {
    ball.velocityY = -ball.velocityY;
    ball.y = -ball.y;
  } else if (bottom > HEIGHT) {
    removeBall(context, ball);
  }
};

const runGame = (context: GameState) => {
  console.log("UPDATING GAME STATE");

  context.balls.forEach((ball) => {
    console.log({ ball });
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    handleWallHit(context, ball);
  });

  if (context.balls.length) {
    setTimeout(() => runGame(context), 100);
  } else {
    console.log("GAME OVER");
  }
};

export const createGame = (ball: Ball): void => {
  console.log("GAME STARTED");

  const state: GameState = {
    balls: [],
    bricks: [],
    players: [],
  };

  addBall(state, ball);
  runGame(state);
};

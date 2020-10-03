export interface GameState {
  players: Player[];
  balls: Ball[];
  bricks: Brick[];
}

export interface Position {
  x: number;
  y: number;
}

export interface Player {
  id: string;
  name: string;
  paddle: Paddle;
}

export interface Paddle extends Position {
  width: number;
}

export interface Ball extends Position {
  velocityX: number;
  velocityY: number;
  radius: number;
}

export interface Brick extends Position {
  health: number;
}

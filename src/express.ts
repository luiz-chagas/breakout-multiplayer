import express, { NextFunction, Response, Request } from "express";
import path from "path";

export const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// default error handler
app.use(function (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  res.status(500);
  res.send(err);
});

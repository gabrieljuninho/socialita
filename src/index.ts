import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import { logger } from "./utils/logger";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

if (!process.env.PORT) {
  process.exit(1);
}

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

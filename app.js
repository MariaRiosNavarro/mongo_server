import "dotenv/config";
import cors from "cors";
import express from "express";
import { router as hitchesRouter } from "./hitches/router.js";

const app = express();

app.use(cors());
app.use(express.json()); //body parser -> checkt den header 'content-type' (aplication/json)

app.use("/api/hitches", hitchesRouter);

app.listen(process.env.PORT, () =>
  console.log("Port: http://localhost:", process.env.PORT)
);

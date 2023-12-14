import express from "express";
import { addHitch, getHitches } from "./controller.js";

export const router = new express.Router();

router.post("/", addHitch);
router.get("/", getHitches);

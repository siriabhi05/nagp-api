import { Router } from "express";
import { getData } from "../db/mongo.js";

var router = Router();

router.get("/", async function (request, response) {
  response.status(200).json(200, await getData());
});

export default router;

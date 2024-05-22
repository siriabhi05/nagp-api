import { Router } from "express";
import { getData } from "../db/mongo.js";

var router = Router();

router.get("/", async function (request, response) {
  const dataResponse = await getData();
  response.status(dataResponse.status).json(dataResponse.performances);
});

export default router;

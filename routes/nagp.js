import { Router } from "express";
import { createData, getData } from "../db/mongo.js";

var router = Router();

router.get("/", async function (request, response) {
  const dataResponse = await getData();
  response.status(dataResponse.status).json(dataResponse.performances);
});

router.post("/", async function (request, response) {
  await createData(request.body.data);
  response.status(200).json("Ok")
})

export default router;

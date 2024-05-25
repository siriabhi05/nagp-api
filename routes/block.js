import { Router } from "express";

var router = Router();

router.get("/", async function (request, response) {
    for (let i = 0; i < 1000000; i++) { console.log(i)}
    response.status(200).send("CPU intensive work finished");
});


export default router;

import express, { static as sta } from "express";
import { createServer } from "http";
import nagpRouter from "./routes/nagp.js";
import blockRouter from "./routes/block.js"

var app = express();
app.use(express.json())
app.use("/nagp", nagpRouter);
app.use("/block", blockRouter);
app.use(sta("public"));

const port = 3010;
app.set("port", port);

var server = createServer(app);
server.listen(port);

export default app;

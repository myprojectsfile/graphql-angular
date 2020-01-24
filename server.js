import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Hello from express"));

app.listen(4000, () => console.log("Express Server Running On Port 4000"));

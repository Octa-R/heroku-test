import * as expres from "express";
const app = expres();
const port = process.env.PORT || 3000;

app.get("/env", (req, res) => {
  res.json({ enviroment: process.env.NODE_ENV });
});

app.listen(port, (req, res) => {
  console.log("escuchando puerto: " + port);
});

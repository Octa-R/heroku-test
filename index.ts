import * as expres from "express";
const app = expres();
const isDev = process.env.NODE_ENV === "development";
const port = process.env.PORT || 3000;
app.get("/env", (req, res) => {
  res.json({ enviroment: process.env.NODE_ENV });
});

app.get("/db-env", (req, res) => {
  res.json({ db: process.env.DB_URI });
});

app.listen(port, (req, res) => {
  console.log("escuchando puerto: " + port);
});

const authorization = require("./middleware/authorization");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const login = require("./login");
const encode = require("./encode");

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(express.json());

app.post("/login", login);

app.post("/encode", authorization, encode);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;

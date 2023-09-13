const express = require("express");

require("./db/mongoose");
const itemRouter = require("./routers/item");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(itemRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

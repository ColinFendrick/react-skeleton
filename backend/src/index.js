const express = require("express");

require("./db/mongoose");
const itemRouter = require("./routers/item");
const userRouter = require("./routers/user");

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use(itemRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

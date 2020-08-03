const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const CORS = require("cors");
const encrypt = require("./utils/encrypt");
const decode = require("./utils/decode");
const encryptedTest = require("./tests/encrypt-test");
const decodeTest = require("./tests/decode-test");

app.listen(port, () => {
  console.log(`Server http://localhost:${port}`);
});

app.use(bodyParser.json(), CORS());

app.post("/encrypt", encrypt, (req, res, next) => {
  const { encryptedMessage } = req;
  res.status(200).json(encryptedMessage);
});

app.post("/decode", decode, (req, res, next) => {
  const { decodedMessage } = req;
  res.status(200).json(decodedMessage);
});

//TESTS
encryptedTest();
decodeTest();

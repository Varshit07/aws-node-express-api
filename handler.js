const serverless = require("serverless-http");
const express = require("express");
const app = express();

const cubeNumber = (number) => number * number * number;

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello World!",
  });
});

app.get("/cube", (req, res, next) => {
  console.log(isNaN(parseInt((req.query.number))));
  if(!isNaN(parseInt((req.query.number)))) {
    return res.status(200).json({
      cube: cubeNumber(req.query.number),
    });
  }

  return res.status(200).json({
    message: "Improper Request",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);

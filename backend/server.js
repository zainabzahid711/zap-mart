const express = require("express");

const app = express();

//first parameter is location 2nd is callback func
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/page.js");
});

//port define
const port = 3001;

app.listen(port, () => {
  console.log("server is running");
});

const express = require('express');
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app)

const server = app.listen(1923, function () {
  console.log('app running on port.', server.address().port);
});
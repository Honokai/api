"use strict";

var express = require('express');

var bodyParser = require("body-parser");

var db = require('./app/db/models'); // db.sequelize.sync({force:false,alter:false}).then(() => {
//     console.log("Tabelas criadas")
// })


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  res.json({
    message: "MINHA API NA WEB"
  });
});

require("./app/routes")(app);

app.listen("3000");
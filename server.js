const express = require('express')
const bodyParser = require("body-parser")
const db = require('./app/db/models')
// db.sequelize.sync({force:false,alter:false}).then(() => {
//     console.log("Tabelas criadas")
// })
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({message: "MINHA API NA WEB"})
})

require("./app/routes")(app);

app.listen("3000")
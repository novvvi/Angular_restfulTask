const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express()

app.use(express.static(__dirname + '/public/dist/public'))
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("8000 run")
})
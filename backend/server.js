require("dotenv").config();
require('./config/db.connection.js')
var cors = require("cors")
var morgan = require("morgan")
var express = require("express");
var animalRouter = require('./routes/animals')

var { PORT } = process.env;
var app = express();


app.use('/animals', animalRouter)
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 


app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


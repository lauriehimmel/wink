require("dotenv").config();
require('./config/db.connection.js')

var cors = require("cors")
var morgan = require("morgan")
var animalRouter = require('./routes/animals')

var { PORT } = process.env;
var express = require("express");
var app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use(cors());
app.use(morgan("dev"));

app.use('/animals', animalRouter)

app.get("/", (req, res) => {
    res.send("hello world");
});

app.set("port", process.env.PORT || 8000);


app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
  });


require("dotenv").config();
require('./config/db.connection.js')

const { PORT } = process.env;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


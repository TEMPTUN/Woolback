// package require
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const route = require("./routes/conversion.js")
const youtbedl = require('ytdl');
dotenv.config('.env');


// app setup
const app = express();
const port = process.env.Port || 3000;

// middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors(
    {
        origin: process.env.Port  || "http://localhost:3000",
        credentials: true
    }
));

// routes
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api", route);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);


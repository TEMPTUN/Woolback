// package require
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
// const route = require("./routes/conversion.js")
dotenv.config('.env');


// app setup
const app = express();
const port = process.env.PORT;

// middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors(
    {
        origin: process.env.PORT,
        credentials: true
    }
));

// routes
app.get("/", (req, res) => {
    res.send("Hello ");
});
// app.use("/api", route);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);


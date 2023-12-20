// package require
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import route from "./routes/user.js";
dotenv.config('.env');


// app setup
const app = express();
const port = process.env.PORT;

// middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors(
    {
        origin: true,
        credentials: true
    }
));

// routes
app.get("/", (req, res) => {
    res.send("Hello ");
});
app.use("/api", route);


app.listen(`${port}`, () => {
    console.log(`Listening on port ${port}`);
    }
);


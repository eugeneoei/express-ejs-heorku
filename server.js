const express = require("express");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT, () => {
    console.log(`Express app listening on Port: ${process.env.PORT}`);
});

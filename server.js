const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT, () => {
    console.log(`Express app listening on Port: ${process.env.PORT}`);
});

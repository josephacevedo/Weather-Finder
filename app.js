const express = require("express");
const app = express();

const path = require("path");

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(express.static("public"));
app.set("views", "views");
app.set("view engine", "hbs");

const router = require('./src/router');

app.use("/", router);


app.listen(3000, () => {
    console.log("server is running on port 3000");
})
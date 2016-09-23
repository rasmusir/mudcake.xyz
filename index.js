"use strict";

let express = require("express");
let fs = require("fs");
let app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    fs.readFile("views/base.html", (err, data) => {
        if (err) throw err;
        res.send(data.toString());
    });
});

app.listen(8002);

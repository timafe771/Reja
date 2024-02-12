console.log("Web server boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB chaqirish
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session kodlari

// 3: Views kodlari
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing kodlari
/*
app.get("/hello", function (req, res) {
  res.end(`<h1>HELLO WORLD</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});
*/

// app.post("/create-item", (req, res) => {
//   console.log(req);
//   res.json({ test: "success" });
// });

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;

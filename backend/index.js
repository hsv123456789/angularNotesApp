const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const app = express();
const url = "mongodb://localhost:27017";
const noterRouter = require("./routers/notes");
mongoose.connect(url);
const con = mongoose.connection;
const corse = require("cors");
app.use(corse());
con.on("open", () => {
  console.log("connected");
});

app.use(express.json());
app.use("/notes", noterRouter);

app.listen(port, () => {
  console.log(`Listening successfully on the port ${port}`);
});

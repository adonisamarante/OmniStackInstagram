const express = require("express");
const mongoose = require("mongoose");

//cria um servidor
const app = express();
mongoose.connect(
  "mongodb+srv://adonis:adonis@cluster0-lmtvc.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(require("./routes"));

app.listen(3333);

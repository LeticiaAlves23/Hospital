const express = require("express");
const mongoose = require("mongoose");
const hospital = require('./model/hospital_model.js')

const app = express();
app.use(express.json());

let CadsHosp = "mongodb+srv://Hospital:uXmC7NyAwcVMYoZt@hospital-yrg5v.gcp.mongodb.net/hospital?retryWrites=true&w=majority";

mongoose.connect(CadsHosp, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

app.listen(3000, () => { console.log('1,2,3 Server is running...') });



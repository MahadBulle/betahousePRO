var express = require('express');
const mongoose = require('mongoose');

const housesRoutes = require ("./routes/housesRoutes")
const usersRoutes = require ("./routes/usersRoutes")
const himagesRoutes = require ("./routes/himagesRoutes")

var app = express();

app.use(express.json());

app.use('/houses', housesRoutes);
app.use('/users', usersRoutes);
app.use('/himages', himagesRoutes);

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1:27017/BetaHouse')
// mongoose.connect('mongodb+srv://generator:HkAXEuNAexSC358T@cluster0.fonguby.mongodb.net/invoicegenerator')
  .then(() => console.log('Connected!'));



module.exports = app;

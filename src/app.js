'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Conecta com o banco
mongoose.connect('mongodb://localhost:27017/cursonode');
//Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');
//Carrega rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);
module.exports = app;

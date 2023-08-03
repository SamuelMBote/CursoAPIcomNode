'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
exports.get = (req, res, next) => {
  res.status(201).send({title: 'GET'});
};
exports.post = (req, res, next) => {
  var product = new Product(req.body);
  product
    .save()
    .then((x) => {
      res.status(201).send({message: 'Produto cadastrado com sucesso!'});
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Falha ao cadastrar produto', data: e.message});
    });
};

exports.put = (req, res, next) => {
  res.status(201).send({title: 'PUT'});
};

exports.delete = (req, res, next) => {
  res.status(201).send({title: 'DELETE'});
};

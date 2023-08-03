'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');

exports.get = (req, res, next) => {
  Product.find({active: true}, 'title price slug')
    .then((r) => {
      res.status(201).send(r);
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Falha ao cadastrar produto', data: e.message});
    });
};
exports.getBySlug = (req, res, next) => {
  Product.findOne({slug: req.params.slug, active: true}, 'title price slug')
    .then((r) => {
      res.status(201).send(r);
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Falha ao cadastrar produto', data: e.message});
    });
};
exports.getById = (req, res, next) => {
  Product.findById(req.params.id)
    .then((r) => {
      res.status(201).send(r);
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Falha ao cadastrar produto', data: e.message});
    });
};
exports.getByTag = (req, res, next) => {
  Product.find({tags: req.params.tag, active: true})
    .then((r) => {
      res.status(201).send(r);
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Falha ao buscar produto pela tag', data: e.message});
    });
};
exports.post = (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(
    req.body.title,
    3,
    'O título deve conter pelo menos 3 caracteres',
  );
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
  Product.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
    },
  })
    .then((r) => {
      res.status(201).send({message: 'Produto atualizado com sucesso'});
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Erro ao atualizar produto', data: e.message});
    });
};

exports.delete = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id)
    .then((r) => {
      res.status(201).send({message: 'Produto deletado com sucesso'});
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Erro ao deletar produto', data: e.message});
    });
};

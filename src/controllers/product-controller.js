'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.get = (req, res, next) => {
  repository
    .get()
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
  repository
    .getBySlug(req.params.slug)
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
  repository
    .getById(req.params.id)
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
  repository
    .getByTag(req.params.tag)
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
  repository
    .post(req.body)
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
  repository
    .put(req.params.id, req.body)
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
  repository
    .delete(req.params.id)
    .then((r) => {
      res.status(201).send({message: 'Produto deletado com sucesso'});
    })
    .catch((e) => {
      res
        .status(400)
        .send({message: 'Erro ao deletar produto', data: e.message});
    });
};

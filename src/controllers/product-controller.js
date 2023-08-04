'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {
  try {
    let data = await repository.get();
    res.status(201).send(data);
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao cadastrar produto', error: error.message});
  }
};
exports.getBySlug = async (req, res, next) => {
  try {
    let data = await repository.getBySlug(req.params.slug);
    res.status(201).send(data);
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao cadastrar produto', error: error.message});
  }
};
exports.getById = async (req, res, next) => {
  try {
    let data = await repository.getById(req.params.id);
    res.status(201).send(data);
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao cadastrar produto', error: error.message});
  }
};
exports.getByTag = async (req, res, next) => {
  try {
    let data = await repository.getByTag(req.params.tag);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao buscar produto pela tag',
      error: error.message,
    });
  }
};
exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen;

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }
  try {
    let data = repository.post(req.body);
    res.status(201).send({message: 'Produto cadastrado com sucesso!', data});
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao cadastrar produto', error: error.message});
  }
};

exports.put = async (req, res, next) => {
  try {
    let data = await repository.put(req.params.id, req.body);
    res.status(201).send({message: 'Produto atualizado com sucesso', data});
  } catch (error) {
    res
      .status(400)
      .send({message: 'Erro ao atualizar produto', error: error.message});
  }
};

exports.delete = async (req, res, next) => {
  try {
    let data = await repository.delete(req.params.id);
    res.status(201).send({message: 'Produto deletado com sucesso'});
  } catch (error) {
    res
      .status(400)
      .send({message: 'Erro ao deletar produto', error: error.message});
  }
};

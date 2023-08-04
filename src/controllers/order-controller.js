'use strict';
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/order-repository');

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
exports.getByNumber = async (req, res, next) => {
  try {
    let data = await repository.getByNumber(req.params.slug);
    res.status(201).send(data);
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao cadastrar produto', error: error.message});
  }
};

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }
  try {
    let data = await repository.post(req.body);

    res.status(201).send({message: 'Pedido cadastrado com sucesso!', data});
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao cadastrar pedido', error: error.message});
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

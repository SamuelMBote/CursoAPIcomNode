'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');

exports.get = async (req, res, next) => {
  try {
    let data = await repository.get();
    res.status(201).send(data);
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao buscar clientes', error: error.message});
  }
};
exports.getByEmail = async (req, res, next) => {
  try {
    let data = await repository.getByEmail(req.params.email);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send({
      message: 'Falha ao buscar cliente por email',
      error: error.message,
    });
  }
};
exports.getById = async (req, res, next) => {
  try {
    let data = await repository.getById(req.params.id);
    res.status(201).send(data);
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao buscar cliente', error: error.message});
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
    res.status(201).send({message: 'Cliente cadastrado com sucesso!', data});
  } catch (error) {
    res
      .status(400)
      .send({message: 'Falha ao cadastrar cliente', error: error.message});
  }
};

exports.put = async (req, res, next) => {
  try {
    let data = await repository.put(req.params.id, req.body);
    res.status(201).send({message: 'Cliente atualizado com sucesso', data});
  } catch (error) {
    res
      .status(400)
      .send({message: 'Erro ao atualizar cliente', error: error.message});
  }
};

exports.delete = async (req, res, next) => {
  try {
    let data = await repository.delete(req.params.id);
    res.status(201).send({message: 'Produto deletado com sucesso', data});
  } catch (error) {
    res
      .status(400)
      .send({message: 'Erro ao deletar produto', error: error.message});
  }
};

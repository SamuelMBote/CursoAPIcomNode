'use strict';
const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.get = async () => {
  return await Customer.find();
};

exports.getByEmail = async (email) => {
  return await Customer.findOne({email});
};
exports.getById = async (id) => {
  return await Customer.findById(id);
};

exports.post = async (data) => {
  var customer = new Customer(data);
  return await customer.save();
};

exports.put = async (id, data) => {
  return await Customer.findByIdAndUpdate(
    id,
    {
      $set: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    },
    {new: true},
  );
};

exports.delete = async (id) => {
  return await Customer.findByIdAndRemove(id);
};

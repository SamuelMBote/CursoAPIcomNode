'use strict';
const mongoose = require('mongoose');
const Order = mongoose.model('Order');
const guid = require('uuid');

exports.get = async () => {
  return await Order.find().populate('customer').populate('items.product');
};

exports.getByNumber = async (number) => {
  return await Order.findOne({number}, 'title price slug');
};

exports.post = async (data) => {
  var order = new Order({
    customer: data.customer,
    number: guid.v4(),
    items: data.items || [],
  });
  return await order.save();
};

exports.put = async (id, data) => {
  return await Order.findByIdAndUpdate(id, {
    $set: {
      customer: data.customer,
      items: data.items,
    },
  });
};

exports.delete = async (id) => {
  return await Order.findByIdAndRemove(id);
};

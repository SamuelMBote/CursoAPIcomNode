'use strict';
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
  return Product.find({active: true}, 'title price slug');
};

exports.getBySlug = (slug) => {
  return Product.findOne({slug, active: true}, 'title price slug');
};
exports.getById = (id) => {
  return Product.findById(id);
};
exports.getByTag = (tag) => {
  return Product.find({tags: tag, active: true});
};

exports.post = (data) => {
  var product = new Product(data);
  return product.save();
};

exports.put = (id, data) => {
  return Product.findByIdAndUpdate(id, {
    $set: {
      title: data.title,
      description: data.description,
      price: data.price,
    },
  });
};

exports.delete = (id) => {
  return Product.findByIdAndRemove(id);
};

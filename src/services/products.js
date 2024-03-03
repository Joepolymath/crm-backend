const ProductModel = require('../models/product');
const { errorResponse, success } = require('../utils/response');

async function create(payload) {
  const newProduct = await ProductModel.create(payload);
  if (!newProduct) {
    return errorResponse(500, 'Unable to create product');
  }

  return success('Product created', newProduct);
}

async function getAll(query = {}) {
  const foundProducts = await ProductModel.find(query).sort({ createdAt: -1 });
  if (!foundProducts) {
    return errorResponse(404, 'Products not found');
  }

  return success('Products retrieved', foundProducts);
}

module.exports = {
  create,
  getAll,
};

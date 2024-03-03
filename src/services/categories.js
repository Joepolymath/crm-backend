const CategoryModel = require('../models/category');
const { errorResponse, success } = require('../utils/response');

async function create(payload) {
  const newProduct = await CategoryModel.create(payload);
  if (!newProduct) {
    return errorResponse(500, 'Unable to create category');
  }

  return success('Category created', newProduct);
}

async function getAll(query = {}) {
  const foundProducts = await CategoryModel.find(query).sort({ createdAt: -1 });
  if (!foundProducts) {
    return errorResponse(404, 'Categories not found');
  }

  return success('Categories retrieved', foundProducts);
}

module.exports = {
  create,
  getAll,
};

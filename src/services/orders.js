const OrderModel = require('../models/order');
const { errorResponse, success } = require('../utils/response');

async function createMany(payload) {
  const results = [];
  for (let order of payload) {
    const newOrder = await OrderModel.create(order);
    results.push(newOrder);
  }

  return success('Order created', results);
}

async function getAll(query = {}) {
  const foundProducts = await OrderModel.find(query)
    .sort({ createdAt: -1 })
    .populate('product');
  if (!foundProducts) {
    return errorResponse(404, 'Orders not found');
  }

  return success('Orders retrieved', foundProducts);
}

module.exports = {
  createMany,
  getAll,
};

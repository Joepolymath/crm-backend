const ordersServices = require('../services/orders');

async function create(req, res) {
  try {
    const data = await ordersServices.createMany(req.body);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to create Order' });
  }
}

async function getAll(req, res) {
  try {
    const data = await ordersServices.getAll(req.query);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch Orders' });
  }
}

module.exports = {
  create,
  getAll,
};

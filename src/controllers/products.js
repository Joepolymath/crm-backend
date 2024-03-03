const productsServices = require('../services/products');

async function create(req, res) {
  try {
    const data = await productsServices.create(req.body);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to create product' });
  }
}

async function getAll(req, res) {
  try {
    const data = await productsServices.getAll(req.query);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch products' });
  }
}

module.exports = {
  create,
  getAll,
};

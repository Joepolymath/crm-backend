const categoriesServices = require('../services/categories');

async function create(req, res) {
  try {
    const data = await categoriesServices.create(req.body);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to create categories' });
  }
}

async function getAll(req, res) {
  try {
    const data = await categoriesServices.getAll(req.query);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch categories' });
  }
}

module.exports = {
  create,
  getAll,
};

const reviewsServices = require('../services/reviews');

async function create(req, res) {
  try {
    const data = await reviewsServices.create(req.body);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to create review' });
  }
}

async function getAll(req, res) {
  try {
    const data = await reviewsServices.getAll(req.query);
    return res.status(data.statusCode).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch reviews' });
  }
}

module.exports = {
  create,
  getAll,
};

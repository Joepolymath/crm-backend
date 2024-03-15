const ReviewModel = require('../models/review');
const { errorResponse, success } = require('../utils/response');

async function create(payload) {
  const newReview = await ReviewModel.create(payload);
  if (!newReview) {
    return errorResponse(500, 'Unable to create review');
  }

  return success('Review created', newReview);
}

async function getAll(query = {}) {
  const foundReviews = await ReviewModel.find(query)
    .sort({ createdAt: -1 })
    .populate('user');
  if (!foundReviews) {
    return errorResponse(404, 'Reviews not found');
  }

  return success('Reviews retrieved', foundReviews);
}

module.exports = {
  create,
  getAll,
};

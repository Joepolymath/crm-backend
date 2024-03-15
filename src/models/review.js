const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    comment: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Review', reviewSchema);

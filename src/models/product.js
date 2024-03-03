const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    image: String,
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);

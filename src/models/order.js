const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    price: Number,
    quantity: Number,
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
    buyer: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    deliveryDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Order', orderSchema);

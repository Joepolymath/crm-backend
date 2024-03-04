const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    price: Number,
    quantity: Number,
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
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

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        books: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }],
        totalPrice: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true },
);

module.exports = mongoose.model('Transaction', transactionSchema);

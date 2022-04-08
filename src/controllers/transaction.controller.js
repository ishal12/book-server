const mongoose = require('mongoose');
const response = require('../helpers/response');
const Transaction = require('../models/transaction.model');

const transactionTotal = (req, res) => {
	try {
		Transaction.find({ time: { type: Date, default: Date.now } })
			.then((transaction) => {
				return response.successResponse(res, transaction);
			})
			.catch((err) => {
				return response.errorResponse(res, err.message);
			});
	} catch (err) {
		return response.errorResponse(res, err.message);
	}
};

const transactionCreate = (req, res) => {
	try {
		const transactionPayload = new Transaction({
			email: req.body.email,
			books: req.body.books,
			totalPrice: req.body.totalPrice,
		});

		transactionPayload
			.save()
			.then((transaction) => {
				return response.successResponse(
					res,
					{
						email: transaction.email,
						books: transaction.books,
						totalPrice: transaction.totalPrice,
					}
				);
			})
			.catch((err) => {
				return response.errorResponse(res, err.message);
			})
	} catch (err) {
		return response.errorResponse(res, err.message);
	};
};

module.exports = {
	transactionCreate,
	transactionTotal,
}

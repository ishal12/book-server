const { successResponse, errorResponse, validationResponse, notFoundResponse } = require('../helpers/response');
const Book = require('../models/book.model');

const bookList = (req, res) => {
  try {
    console.log('masuk')
    Book.find()
      .then((book) => {
        return successResponse(res, book);
      })
      .catch((err) => {
        return errorResponse(res, err.message);
      });
  } catch (err) {
    return errorResponse(res, err);
  }
};

const bookCreate = (req, res) => {
  try {
    const bookPayload = new Book({
      name: req.body.name,
      price: req.body.price,
    });

    bookPayload
      .save()
      .then((book) => {
        return successResponse(
          res,
          {
            name: book.name,
            price: book.price,
          }
        );
      })
      .catch((err) => {
        return errorResponse(res, err);
      })
  } catch (err) {
    return errorResponse(res, err);
  };
};

const bookUpdate = (req, res) => {

}

module.exports = {
  bookList,
  bookCreate
}

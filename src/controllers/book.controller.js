const mongoose = require('mongoose');
const response = require('../helpers/response');
const Book = require('../models/book.model');

const bookList = (req, res) => {
  try {
    Book.find()
      .then((book) => {
        return response.successResponse(res, book);
      })
      .catch((err) => {
        return response.errorResponse(res, err.message);
      });
  } catch (err) {
    return response.errorResponse(res, err);
  }
};

const bookDetail = (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return response.validationResponse(
        res,
        `Book id ${req.params.id} invalid`,
      );
    }

    Book.findById(req.params.id)
      .then((book) => {
        return response.successResponse(res, book);
      })
      .catch((err) => {
        return response.errorResponse(res, err.message);
      });
  } catch (err) {
    return response.errorResponse(res, err);
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
        return response.successResponse(
          res,
          {
            name: book.name,
            price: book.price,
          }
        );
      })
      .catch((err) => {
        return response.errorResponse(res, err.message);
      })
  } catch (err) {
    return response.errorResponse(res, err);
  };
};

const bookUpdate = (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return response.validationResponse(
        res,
        `Book id ${req.params.id} invalid`,
      );
    }

    Book.findById(req.params.id)
      .then((book) => {
        book.name = req.body.name
        book.price = req.body.price

        book
          .save()
          .then((bookSave) => {
            return response.successResponse(
              res,
              {
                name: bookSave.name,
                price: bookSave.price
              }
            );
          })
          .catch((err) => {
            return response.errorResponse(res, err.message);
          });
      })
      .catch((err) => {
        return response.errorResponse(res, err.message);
      })
  } catch (err) {
    return response.errorResponse(res, err);
  }
}

const bookDelete = (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return response.validationResponse(
        res,
        `Book id ${req.params.id} invalid`,
      );
    }

    Book.findById(req.params.id, (err, book) => {
      if (err) {
        return response.notFoundResponse(
          res,
          `Book id ${req.params.id} not exists`,
        );
      }

      Book.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
          return response.errorResponse(res, err);
        }
        return response.successResponse(res);
      });
    });
  } catch (err) {

  }
}

module.exports = {
  bookList,
  bookCreate,
  bookDetail,
  bookUpdate,
  bookDelete,
}

const express = require('express');

const router = express.Router();

const { bookList } = require('../controllers/book.controller');
// const authorization = require('../middlewares/jwt');

router.get('/', bookList);

module.exports = router;

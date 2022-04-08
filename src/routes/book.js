const express = require('express');
const { requiredScopes } = require('express-oauth2-jwt-bearer');

const router = express.Router();

const { bookList, bookCreate, bookUpdate, bookDelete, bookDetail } = require('../controllers/book.controller');
const checkJwt = require('../middlewares/jwt');

router.get('/', checkJwt, requiredScopes('read:book'), bookList);
router.post('/', checkJwt, requiredScopes('read:book write:book'), bookCreate);
router.get('/:id', checkJwt, requiredScopes('read:book read:book'), bookDetail);
router.put('/:id', checkJwt, requiredScopes('read:book update:book'), bookUpdate);
router.delete('/:id', checkJwt, requiredScopes('read:book delete:book'), bookDelete);

module.exports = router;

const express = require('express');
const { requiredScopes } = require('express-oauth2-jwt-bearer');
const { transactionTotal, transactionCreate } = require('../controllers/transaction.controller');

const router = express.Router();

const checkJwt = require('../middlewares/jwt');

router.get('/', checkJwt, transactionTotal);
router.post('/', checkJwt, requiredScopes('read:book write:book'), transactionCreate);

module.exports = router;

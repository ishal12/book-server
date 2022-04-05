const express = require('express');
const { requiredScopes } = require('express-oauth2-jwt-bearer');
// const { claimIncludes } = require('express-openid-connect');
const router = express.Router();
const response = require('../helpers/response');
const checkJwt = require('../middlewares/jwt');

const checkScopes = requiredScopes('read:book');

router.get('/', checkJwt, checkScopes, (req, res) => {
    try {
        return response.successResponse(res)
    } catch (errs) {
        return response.errorResponse(res, errs.message);
    }
});

module.exports = router;

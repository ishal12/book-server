const express = require('express');

const router = express.Router();

const checkJwt = require('../middlewares/jwt');
const { login_password, login_client } = require('../controllers/auth.controller');

router.post('/password', checkJwt, login_password);
router.post('/client', login_client);

module.exports = router;

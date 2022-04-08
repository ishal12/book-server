const express = require('express');

const router = express.Router();

const checkJwt = require('../middlewares/jwt');

router.get('/', checkJwt, (req, res) => {
    res.json({
        message: 'book-api'
    })
})

module.exports = router;

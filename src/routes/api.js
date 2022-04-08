const express = require('express');

const app = express();

const bookRouter = require('./book');
const loginRouter = require('./login');
const transactionRouter = require('./transaction');

app.use('/book/', bookRouter);
app.use('/login/', loginRouter);
app.use('/transaction/', transactionRouter);

module.exports = app;

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./api/user-router');
const app = express();

app.use(bodyParser.json());
app.use('/users', userRouter);

app.listen(process.env.PORT);

const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');

const app = express();
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Server Started on ${port}!`));
  } catch (e) {
    console.log(e);
  }
};

start();

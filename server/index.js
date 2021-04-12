const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use('api', router);
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

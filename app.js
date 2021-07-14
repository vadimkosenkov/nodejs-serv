const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employees');
const authRoutes = require('./routes/auth');
const keys = require('./config/keys');
const app = express();

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('mongoDB connected'))
  .catch(error => console.log(error));

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('cors')());
app.use('/api/employees', employeeRoutes);
app.use('/auth/login', authRoutes);

module.exports = app;

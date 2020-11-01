const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
// Route file
const bootcamps = require('./routes/bootcamps');

// Load en vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount router
app.use('/api/v1/bootcamps', bootcamps);

// liten to server
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} snode on port ${PORT}`)
);

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// COnnect to database
connectDB();

// Route file
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount router
app.use('/api/v1/bootcamps', bootcamps);

// liten to server
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} snode on port ${PORT}`)
);

// Global Handler to handle the unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exist(1));
});

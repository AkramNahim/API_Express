const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// COnnect to database
connectDB();

// Route file
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount router
app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

// liten to server
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} node on port ${PORT}`.yellow.bold
  )
);

// Global Handler to handle the unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`.red.bold);
  // Close server & exit process
  server.close(() => process.exit(1));
});

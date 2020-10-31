const express = require('express');
const dotenv = require('dotenv');

// Load en vars
dotenv.config({ path: './config/config.env' });

const app = express();

// liten to server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} snode on port ${PORT}`)
);

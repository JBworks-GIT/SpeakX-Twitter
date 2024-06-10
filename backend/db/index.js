const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

mongoose.connect('').then(console.log(
  "Connected to MongoDB"
  ));
  
  const User = mongoose.model('User', {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  });
  
app.listen(3000, () => {
  console.log('Server started on port 3000');
  });
  
  module.exports = {
    app,
    User,
  }
  
  require('../authentication/index.js')
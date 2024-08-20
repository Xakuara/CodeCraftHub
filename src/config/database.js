const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://root:MjE1NTYtZ2xnYW1h@localhost:27017');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
module.exports = connectDB;

[
  {
    "name": "John Doe",
    "password": "password123"
  },
  {
    "name": "Jane Smith",
    "password": "password456"
  },
  {
    "name": "Alex Wong",
    "password": "password789"
  },
  {
    "name": "Emily Jones",
    "password": "passwordabc"
  },
  {
    "name": "Michael Brown",
    "password": "passwordxyz"
  }
]
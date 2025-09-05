const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url, {
      serverSelectionTimeoutMS: 5000
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    
    // Provide helpful error messages
    if (error.message.includes('IP')) {
      console.log('\n🔧 Fix: Add your current IP address to MongoDB Atlas whitelist:');
      console.log('1. Go to https://cloud.mongodb.com/');
      console.log('2. Navigate to Network Access');
      console.log('3. Add IP Address: 103.172.202.79');
      console.log('4. Or use 0.0.0.0/0 for development (less secure)');
    }
    
    if (error.message.includes('authentication')) {
      console.log('\n🔧 Fix: Check your MongoDB username and password in .env file');
    }
    
    process.exit(1);
  }
};

module.exports = connectDB;

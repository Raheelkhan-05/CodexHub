const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://raheelkhanlohani116039:dPwbervoDjHeUCZO@cluster0.jpwlyb4.mongodb.net/';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database is Connected!');
  } catch (err) {
    console.error('Failed to connect to MongoDBase:', err);
  }
};

module.exports = connectToMongoDB;
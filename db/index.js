const mongoose = require('mongoose');
const config = require('../config/config-detail')

const connectionString = 'mongodb+srv://ragnor:m2dyllfMRXVShlz5@cluster0.ygjpbsy.mongodb.net/';

mongoose.connect( config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'courses',
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = db;
const mongoose = require('mongoose');

//create schema
const weatherSchema = new mongoose.Schema({
  city: { type: String },
  country: { type: String },
  temperature: { type: Number },
});

//create search model - collection name: lastSearchedLocation
const Weather = mongoose.model(
  'weatherHistory',
  weatherSchema,
  'weatherHistory'
);

module.exports = { Weather };

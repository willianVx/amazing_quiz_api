const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const questionSchema = new Schema({
    title: String,
    questions: {
    	id: Number,
    	title: String,
    	options: [{ id: Number, text: String}]
    },
    correct: {
    	id: Number
    }
  });

  module.exports = questionSchema;
  

const mongoose = require('mongoose')

var servicesShema = new mongoose.Schema({
  id:String,
  title:String,
  orderCount:Number,
  positiveRate:String,
  imgUrl:String
});

module.exports = mongoose.model('services', servicesShema);

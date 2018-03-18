
const mongoose = require('mongoose')

var shopShema = new mongoose.Schema({
  serviceIndex:String,
  serviceType:Array,
  shopList:Array,
},{
  collection:'shop'
});

module.exports = mongoose.model('shop', shopShema);

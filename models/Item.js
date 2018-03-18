const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  id:String,
  title:String,
  name:String,
  desc:String,
  price:Number,
  oldPrice:Number,
  orderCount:Number,
  soldCount:Number,
  commentCount:Number,
  accept:String,
  praise:String,
  imgUrl:String,
  company:String,
  profile:String
},{
  collection:'Item'
})

module.exports = mongoose.model('item',ItemSchema)
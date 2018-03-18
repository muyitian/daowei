const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  iconUrl:String,
  area:String,
  city:String,
  comment:String,
  createtime:Number,
  nick:String,
  star:Number
},{
  collection:'comment'
})

module.exports = mongoose.model('comment',CommentSchema)
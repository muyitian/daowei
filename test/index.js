
require('../tools/db')
/*const ShopModel = require('../models/Shop')
const ServicesModel = require('../models/Services')*/
/*const ItemSchema = require('../models/Item')*/
const CommentModel = require('../models/Comment')
/*
ServicesModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})

ShopModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})
*/
/*ItemSchema.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})*/

/*CommentShema.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})*/
//                    每页显示的个数  起始点
// 分页公式： find({}).limit(10).skip((1-1)*10).exec(function(){})

CommentModel.find({}).limit(10).skip(0).exec(function (err, data) {
  if(!err){
    console.log(data.length);
    console.log(data);
  }
})
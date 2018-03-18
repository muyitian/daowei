require('./tools/db')

const express = require('express')

const app = express()

app.use(express.static('public'))

const shopMedel = require('./models/Shop')
const serviceMedel = require('./models/Services')
const ItemMedel = require('./models/Item')
const CommentMedel = require('./models/comment')

app.get('/getShopList',function (req, res) {
  shopMedel.find({},function (err,list) {
    if (!err){
      res.send({list:list})
      console.log('服务器连接成功~~~')
    }
  })
})

app.get('/getService',function (req,res) {
  serviceMedel.find({},function (err,list) {
    if(!err){
      res.send({list:list})
    }
  })
})
app.get('/getItem',function (req,res) {
  ItemMedel.findOne({id:'1001'},function (err,list) {
    if(!err){
      console.log(list)
      res.send({list:list})
    }
  })
})

app.get('/getComment',function (req,res) {
  var page = req.query.page
  // req.param()
  CommentMedel.find({}).limit(10).skip((page-1)*10).exec(function (err, data) {
      if(!err){
        res.send({list:data})
      }
  })
})

app.listen(3000)
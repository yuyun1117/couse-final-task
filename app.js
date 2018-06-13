const express = require('express')
const pug = require('pug')

const app = express()

let rawList = [
  {id: 1, name: "数据库系统与原理"},
  {id: 2, name: "软件测试       "},
  {id: 3, name: "软件过程管理   "}
]

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

app.get('/delete/:id', function(req, res) {
  
  let id = parseInt(req.params.id);
  //console.log('++++',req.params)
  rawList = rawList.filter(function(data){
    return data.id !== id
  })
  res.redirect("/list")
})

app.get('/edit/:id', function(req, res) {
  
  let id = parseInt(req.params.id);
  //console.log('++++',req.params)
  rawList = rawList.filter(function(data){
    return data.id == id
  })
  res.redirect("/list")
})


app.get('/list', function(req, res) {
  res.render('list', {list: rawList})
})

/**
app.get('/list', function(req, res) {
  res.render('list', {list: [
    {id: 1, name: "zzz"},
    {id: 2, name: "xxx"},
    {id: 3, name: "yyy"}
  ]})
})**/

app.get('*', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
  
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
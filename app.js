const express = require('express')

const app = express()

app.get('/token', function (req, res) {
  res.send(jwt.sign({"name": "zhangsan"}, "ccc"))
})

app.get('*', function (req, res) {
  res.send("hello,world")
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
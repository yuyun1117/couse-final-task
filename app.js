const express = require('express')
const _ = require('lodash')
const jwt = require('jsonwebtoken');

const app = express()

app.get('/token', function (req, res) {
  res.send(jwt.sign({"name": "zhangsan"}, "ccc"))
})

app.get('*', function (req, res) {
  const token = req.get('Authorization').replace(/^Bearer\s/, '');
  jwt.verify(token, "ThisIsASecret", (err, decoded)=> {
    res.send(JSON.parse(decoded.sub));
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
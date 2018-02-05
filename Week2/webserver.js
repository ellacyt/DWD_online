var express = require('express')
var app = express()

app.use(express.statistic('public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var count = 0;

app.get('/somethingelse', function (req, res) {
  res.send('<html><body><h1>Something Else' + count + '</h1></body></html>');
});

app.get('/formpost', function (req, res) {
  console.log("They submitted:" + req.query.textfield);
  res.send("They submitted:" + req.query.textfield);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
//http://IP:3000/
//Of course a route can be for any "path", here is an example for "/somethingelse":

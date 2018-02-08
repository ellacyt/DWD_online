var express = require('express')
var app = express()

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

app.use(express.static('public'));//you need to make a folder

app.get('/', function (req, res) {
  res.send('Hello World!')
  console.log('new visitor!!!!!')
})

app.get('/somethingelse', function (req, res) {
  res.send('Hello Mars');
  console.log('new friend!!!!!')
});

// //////////////Dynamic//////////////////

app.post('/yourform', function(req, res) {
    var textvalue = req.body.textfield;
    res.send("You submitted: " + textvalue);
    console.log("They submitted: " + textvalue);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!')
// })
// http://IP:3000/
// Of course a route can be for any "path", here is an example for "/somethingelse":

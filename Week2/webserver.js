var express = require('express')
var app = express()

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);


//////////////////Static//////////////////////
app.use(express.static('public'));//you need to make a folder

// //////////////Dynamic//////////////////

app.get('/somethingelse', function (req, res) {
  res.send('Hello Mars');
  console.log('new friend!!!!!')
});


app.post('/yourform', function(req, res) {
    var textvalue = req.body.textfield;

    if(textvalue > 8 || textvalue < 8) {
    res.send(" Try again!");
  } else {
    res.send("You guess right! The answer is " + textvalue )
  }

    // res.send("You submitted: " + textvalue);
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

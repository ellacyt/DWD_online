var express = require('express')
var app = express()


//////////////////Static//////////////////////
app.use(express.static('public'));//you need to make a folder
app.set('view engine', 'ejs');


var data = [];

app.get('/save', function(req,res){
  var datatosave = {x: req.query.x, y:req.query.y};
  data.push(datatosave);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  res.send('{response: "thanks"}');
});

app.get('/send', function(req,res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.send(data);
});


app.listen(9090, function () {
  console.log('Example app listening on port 9090!')
});

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!')
// })
// http://IP:3000/
// Of course a route can be for any "path", here is an example for "/somethingelse":

var config = require('./config.js');

var mongojs = require('mongojs');
var db = mongojs(config.username + ":" + config.password + "@ds043350.mlab.com:43350/testingtesting", ["submissions"]);
// mongodb://<dbuser>:<dbpassword>@ds043350.mlab.com:43350/testingtesting

var express = require('express')
var app = express()

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);


//////////////////Static//////////////////////
app.use(express.static('public'));//you need to make a folder
app.set('view engine', 'ejs');

// //////////////Dynamic//////////////////
app.get('/templatetest', function(req, res) {
	var data = {person: {name: "Shawn", other: "blah"}};
    res.render('template.ejs', data);
});

var count = 0;

var thesubmissions = [];

app.get('/yourform', function(req, res) {
    // var textvalue = req.body.textfield;
    // res.send("You submitted: " + textvalue);

      db.submissions.save({"Submission":req.query.textfield}, function(err, saved) {
        if( err || !saved ) console.log("Not saved");
          else console.log("Saved");
      });

      res.redirect('/display');
    });

app.get('/one', function(req, res) {
      //req.query._id
      db.submissions.findOne({_id: mongojs.ObjectId(req.query._id)}, function(err, saved) {
        res.send("You pulled out: " + JSON.stringify(saved));
      });

    });

app.get('/display', function(req, res) {

    db.submissions.find({}, function(err, saved) {
        if (err || !saved) {
        	console.log("No results");
        }
        else {
          console.log(saved);
          res.render('display.ejs', {thedata:saved}) }
				});
			});



app.get('/count', function(req, res) {
		count++;
		res.send("<html><body><h1>"+count+"</h1></body></html>");
					});

app.get('/', function (req, res) {
		res.send('Hello World!')
					});

app.get('/somethingelse', function(req, res) {
		res.send("Goodbye");
	});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

// app.listen(8080, function () {
//   console.log('Example app listening on port 8080!')
// })
// http://IP:3000/
// Of course a route can be for any "path", here is an example for "/somethingelse":

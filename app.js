var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var email   = require("./node_modules/emailjs/email");
var mailserver  = email.server.connect({
   user:    "ashok@voereir.com", 
   password:"Blabil68", 
   host:    "mailcluster.loopia.se", 
   ssl:     true
});


app.use("/css", express.static(__dirname + '/website/css'));
app.use("/js", express.static(__dirname + '/website/js'));
app.use("/vendor", express.static(__dirname + '/website/vendor'));
app.use("/img", express.static(__dirname + '/website/img'));
app.get('/', function (req, res) {
  res.sendfile('website/index.html');
});

app.post('/query', function (req, res) {
  mailserver.send({
   text:    req.body.message,
   from:    req.body.email,
   to:      "Shivani <shivani@voereir.com>",
   subject: req.body.subject
	}, function(err, message) { console.log(err || message); });
   res.sendStatus(200);

});

app.listen(80, function () {
  //console.log('Example app listening on port 3000!');
});

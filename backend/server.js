var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var dbo = require('./db');
var artistsController = require('./controllers/artists');
var fridayController = require('./controllers/friday');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get("/", function (req,res) {
  res.send("New home");
});

app.get("/artists/", artistsController.all);

app.get("/artists/:id",  artistsController.findById);

app.post("/artists/", artistsController.create);

app.put("/artists/:id", artistsController.update);

app.delete("/artists/:id", artistsController.delete);

app.post("/getfriday/", fridayController.getFriday);

dbo.connect("mongodb://docker_mongo:27017/", function(err) {
  if (err) throw err;
  app.listen(8080, function () {
    console.log("Api app started!");
  });
});
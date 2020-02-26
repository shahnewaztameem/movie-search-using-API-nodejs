var express = require("express");
var request = require("request");
var ejs = require("ejs");
var app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("search");
});
app.get("/result", (req, res) => {
    var searchTerm = req.query.search;
    var url = 'http://www.omdbapi.com/?s=' + searchTerm + '&apikey=thewdb';
  request(
    url,
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        var results = JSON.parse(body);
        res.render('results', {results: results});
      }
    }
  );
});
app.listen(3000, function() {
  console.log("App has been started on port 3000!");
});

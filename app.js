var express = require("express");
var request = require("request");
var ejs = require("ejs");
var app = express();

app.set("view engine", "ejs");

app.get("/result", (req, res) => {
  request(
    "http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb",
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

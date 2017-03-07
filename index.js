var app = require("express")();
var bodyParser = require("body-parser");
var o2x = require("object-to-xml");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/text", function(req, res) {
  res.sendStatus(200);
});

app.get("/json", function(req, res) { 
  res.setHeader('Content-Type', 'application/json');
  res.send({ some : true });
});

app.get("/xml", function(req, res) {
  res.set("Content-Type", "text/xml");
  res.send(
    o2x({
      '?xml version="1.0" encoding="utf-8"?': null,
      some: true
    })
  );
});

app.post("/json", function(req, res) {
  console.log(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(req.body);
});


app.listen(9600, function() {
  console.log("rest server listining on port 9600");
});

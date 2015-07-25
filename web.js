var express = require('express');
var fs = require('fs');
var app = express();


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {

   var pass = fs.readFileSync("index.html");
   var passtring = pass.toString();
    response.send(passtring);
//  response.send('Hello World2!')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

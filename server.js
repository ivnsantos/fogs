// var app = require('./server/config/express');
// var http = require('http');


// http.createServer(app)
// .listen(process.env.PORT || 3000, function() {
// 	console.log('Servidor iniciado na porta 3000');
// });


var fs = require('fs');
var http = require('http');
var https = require('https');
//var privateKey  = fs.readFileSync('./domain-key.txt', 'utf8');//
//var certificate = fs.readFileSync('./domain-crt.txt', 'utf8');

//var credentials = {key: privateKey, cert: certificate};
var app = require('./server/config/express');

function ensureSecure(req, res, next){
  if(req.secure){
    return next();
  };
  res.redirect('https://' + req.hostname + req.url);
};

app.all('*', ensureSecure);

//app.get('/', function(req, res){
 // res.send('<h2>Bugph rodando com SSL</h2>');
//})

var httpServer = http.createServer(app);
//var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
//httpsServer.listen(443);
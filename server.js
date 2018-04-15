var app = require('./server/config/express');
var http = require('http');


http.createServer(app)
.listen(process.env.PORT || 3000, function() {
	console.log('Servidor iniciado na porta 3000');
});
var express = require('express'),
    app = express();



app.use(express.static('./client'));


module.exports = app;
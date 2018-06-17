var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = require('./app/config/config');

db.sequelize.sync().then(() => {
    console.log('creating table');
});

require('./app/route/customer')(app);

var server = app.listen(8080, function () {
    console.log('server runing on 8080')
});
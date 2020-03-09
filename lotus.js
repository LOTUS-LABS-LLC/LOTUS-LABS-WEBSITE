var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const chalk = require('chalk');

var port = 80;

io.on('connection', () => {

});

app.get('/', function (req, res) {res.sendFile(__dirname + '/PUBLIC/HTML/index.html');});
app.get('/home', function (req, res) {res.sendFile(__dirname + '/PUBLIC/HTML/index.html');});
app.get('/download', function (req, res) {res.sendFile(__dirname + '/PUBLIC/HTML/download.html');});
app.get('/store', function (req, res) {res.sendFile(__dirname + '/PUBLIC/HTML/store.html');});
app.use(express.static('PUBLIC'));

server.listen(port, () => {
    console.log(chalk.grey('[' + chalk.red('SITE') + ']Launched!'));
  });




  setInterval(() => {
      
  }, 1000);
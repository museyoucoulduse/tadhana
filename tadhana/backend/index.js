var express = require("express");
var morgan = require("morgan");
var storyRouter = require('./router.js')

var hostname = "localhost";
var port = 3000;

var app = express();
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));
app.use('/story', storyRouter)

app.listen(port, hostname, function () {
    console.log(`Server is running at http://${hostname}:${port}`);
});

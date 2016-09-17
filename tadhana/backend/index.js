var express = require("express");
var morgan = require("morgan");
var storyRouter = require('./router.js');
var sex = require("sexjs");

var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public/'));
app.use('/story', storyRouter);

var port = process.env.PORT || 3000;
var hostname = process.env.IP || 'localhost';

app.listen(port, hostname, function (err) {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
    console.log(`Server ${sex.neuter} is running at http://${hostname}:${port}`);
});

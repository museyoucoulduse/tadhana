var express = require("express");
var morgan = require("morgan");
var storyRouter = require('./router.js');

var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public/'));
app.use('/story', storyRouter);

app.listen(process.env.PORT, process.env.IP, function () {
    console.log(`Server is running at http://${process.env.IP}:${process.env.PORT}`);
});

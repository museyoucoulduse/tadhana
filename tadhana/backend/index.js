var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");

var hostname = "localhost";
var port = 3000;

var app = express();
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));

app.all("/", function(req, res, next) {
    //header
});
app.get("/", function(req, res, next) {
    //show all stories
});
app.post("/", function(req, res, next) {
    //post new story
});
app.post("/:storyId/comment", function(req, res, next) {
    //add comment to story
});
app.post("/:storyId/:commentId", function(req, res, next) {
    //upvote or downvote to change the color of the comment 0-255 red 0-255 green
});
app.post("/:storyId/vote", function(req, res, next) {
    //upvote or downvote to change the color of the story 0-255 red 0-255 green
});

app.listen(port, hostname, function () {
    console.log(`Server is running at http://${hostname}:${port}`);
});

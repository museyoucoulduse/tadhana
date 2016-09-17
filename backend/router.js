var express = require('express');
var storyRouter = express.Router();
var bodyParser = require('body-parser');
storyRouter.use(bodyParser.json());
// middleware that is specific to this router
storyRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
storyRouter.route('/').all(function (req, res, next) {
    //header
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //        next()
}).get(function (req, res, next) {
    //show all stories
}).post(function (req, res, next) {
    //post new story
});
storyRouter.route('/:storyId/comment').post(function (req, res, next) {
    //header
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //        next()
    //add comment to story
    // story id in req.params.storyId
});
storyRouter.route('/:storyId/:commentId/vote').post(function (req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //        next()
    //upvote or downvote to change the color of the comment 0-255 red 0-255 green
});
storyRouter.route('/:storyId/vote').post(function (req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    //        next()
    //upvote or downvote to change the color of the story 0-255 red 0-255 green
});
module.exports = storyRouter;
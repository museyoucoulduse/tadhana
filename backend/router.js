var express = require('express');
var storyRouter = express.Router();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;



storyRouter.use(bodyParser.json());
// middleware that is specific to this router
storyRouter.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
storyRouter.route('/')
    .get(function (req, res) {
        //show all stories
        //        res.send('Many stories are untold...');
        var pass = process.env.mongoPASS
        var host = process.env.mongoIP
        var url = ;
        mongo.connect(url, function (err, db) {
            if (err) {
                console.log(err, err.message);
            }
            var collection = db.collection('stories');
            collection.find().toArray(function (err, results) {
                if (err) {
                    console.log(err.message);
                    res.send('Database error')
                }
                db.close()
                res.render('index', {
                    stories: results
                });

            });

        });

    });

storyRouter.route('/addstoryform')
    .get(function (req, res) {
        res.render('addstory');
    });
storyRouter.route('/addstory')
    .post(function (req, res) {
        var story = {
            title: req.newTitle,
            author: req.newName,
            email: req.email,
            story: req.newStory,
            upvotes: 0,
            downvotes: 0,
            clicks: 0
        };
        console.log(story);
        res.render('index')
            //            mongo.connect(url, function (err) {
            //                if (err) {
            //                    console.log(err.message);
            //                }
            //                var collection = db.collection('stories');
            //                collection.insertOne(story, function (err, results) {
            //                    if (err) {
            //                        // try again
            //                    }
            //                    res.render('index', {
            //                        saved: true,
            //                        stories: results
            //                    })
            //                    db.close()
            //                });
            //            });
    });
storyRouter.route('/:storyId')
    .get(function (req, res) {
            var id = req.params.storyId;
            var url = ;
            mongo.connect(url, function (err, db) {
                if (err) {
                    console.log(err, err.message);
                }
                var collection = db.collection('stories');
                collection.find()
                res.send('Single story');
            });
            storyRouter.route('/:storyId/comment')
                .post(function (req, res) {
                    //header
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    });
                    //        next()
                    //add comment to story
                    // story id in req.params.storyId
                });
            storyRouter.route('/:storyId/:commentId/vote')
                .post(function (req, res) {
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    });
                    //        next()
                    //upvote or downvote to change the color of the comment 0-255 red 0-255 green
                });
            storyRouter.route('/:storyId/vote')
                .post(function (req, res) {
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    });
                    //        next()
                    //upvote or downvote to change the color of the story 0-255 red 0-255 green
                });

            module.exports = storyRouter;

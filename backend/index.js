'use strict';
var express = require('express');
var morgan = require('morgan');
var router = require('./router.js');
var sex = require('sexjs');
var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public/'));
app.use('/', router);
app.set('views', './frontend/views/');
app.set('view engine', 'pug');

var comments = [{
        comment: 'yo',
        upvotes: 10,
        downvotes: 160
    },
    {
        comment: 'very constructive comment',
        upvotes: 50,
        downvotes: 10
    }]

var stories1 = [
    {
        title: 'lollol',
        author: 'you',
        email: 'hihihahah@lol.com',
        story: 'long story short. the end.',
        upvotes: 20,
        downvotes: 200,
        comments: comments
    },
    {
        title: 'lgfhdfhl',
        author: 'sheyoume',
        email: 'hiah@lol.com',
        story: 'never ending story.',
        upvotes: 100,
        downvotes: 30,
        comments: comments
}
]

//app.get('/', function (req, res) {
//    res.render('index', {
//        stories: stories1
//    });
//});
var port = process.env.PORT || 3000;
var hostname = process.env.IP || 'localhost';
app.listen(port, hostname, function (err) {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
    console.log(`Server ${sex.neuter} is running at http://${hostname}:${port}`);
});

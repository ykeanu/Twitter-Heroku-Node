var str = [];
var tweets = [];
var textTweet;
var jsonObject;
var final;

var dotenv = require('dotenv');
dotenv.config();

// Twitter API
var Twitter = require('twitter');
var util = require('util');
var T = new Twitter({
    consumer_key: process.env.TWITTER_KEY,
    consumer_secret: process.env.TWITTER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

var paramsTwitter = {
    from: 'khloekardashian',
    // q: '@realDonaldTrump',
    count: 50
};

// Watson Personality API
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
    username: process.env.WATSON_USERNAME,
    password: process.env.WATSON_PASSWORD,
    version_date: '2016-10-20'
});

// ~~~~~~~~~~~
var express = require('express');
var app = express();

// set port number, means that heroku can set the port OR if it can't set it up for us it will be at port 8080
var port = process.env.PORT || 8080

// allows us to server static files (images, CSS, etc) allows us to run in __dirname (goes to folder name)
app.use(express.static(__dirname + "/public")); // if you move your code to files

//routes, part of the URLness of a website
// When going to '/' route the response will render the index file, which is the index.html
app.get("/practice", function(req, res) {

    T.get('/search/tweets.json', paramsTwitter)
        .then(function(stageOne) {
            for (var i = 0; i < stageOne.statuses.length; i++) {
                tweets.push(stageOne.statuses[i].text);
            };
            return textTweet = tweets.join(' ').toString();
        })
        // Watson Parameters
        .then(function(stageTwo) {
            var paramsWatson = {
                // Get the content items from the JSON file.
                text: stageTwo,
                consumption_preferences: true,
                raw_scores: true,
                headers: {
                    'accept-language': 'en',
                    'accept': 'application/json'
                }
            };
            return paramsWatson;
        })
        .then(function(stageThree) {
            personality_insights.profile(stageThree, function(error, response) {
                if (error) {
                    console.log('WATSON Error:', error);
                }
                else {
                    // console.log(JSON.stringify(response, null, 2));
                    // res.send('lets go');
                    final = JSON.stringify(response, null, 2);
                // console.log(final);
                // return jsonObject = JSON.stringify(response, null, 2);
                	res.json(response);
            	}
            });
            // console.log(final);
            // return final;
        });
        // .then(function(stageFour) {
        //     console.log(stageFour);
        //     res.send('itsover10');
        // });

    // res.send('nike');
    // res.json()
});

// server must listen for requests and send a resposne to each request
// you send a request whenever you go to a url, the server needs to start listening to a request.
app.listen(port, function() {
    console.log("app running");
});


// https://www.youtube.com/watch?v=P86N9FqNqso
// install express on app through npm
// install heroku command lines or tools
// heroku --version
// Sign into account
// Download "heroku common line tools" heroku-toolbet or heroku cli
// heroku login | login to heroku
// heroku local web  | heroku automatically puts it on localhost:5000, you can only see this code locally
// git init
// git add .
// git commit -m "Initing"
// heroku create | this will crate the app
//git push <CREATED HEROKU LINK> master
// Now its deplayed on the link!




// Put frontend code into public

//To Update:
// git add .
// git commit -m ""
// git push <HEROKU LINK> master


//Tutorial 2 https://www.youtube.com/watch?v=AZNFox2CvBk

// Procfile
// web: server.js    |main node js application file name

// app.json
// store environment variables
// create isnide your root directory  | check out heroku website
// templating for node.js file itself 


// Create application on heroku
// heroku create <NAME OF APPLICATION>
// git push heroku master
// heroku open


// Run application locally
// npm install
// heroku local web  | starts a web server




// Basic Routing 
// Node + Express



// Install express through npm
//
// var str = [];
// var tweets = [];
// var textTweet;


// // Twitter API
// var Twitter = require('twitter')
// var util = require('util');

// var T = new Twitter({
//     consumer_key: '0unL0ZgQHGLMtKDzd8PXzFghU',
//     consumer_secret: 'C7GvSsukndjpbhxwADqGkzwKFu6tVbDLuhgeiYTTlrCgfWPAds',
//     access_token_key: '911833839026053120-rImLqdnhcDuCeciaCNOA6cONtN3C582',
//     access_token_secret: 'zz7GkntBVlpaRz6fsOHm2loAfkxkeJomqWvT1aiMyk5a0',
// });

// var params = {
//     from: 'khloekardashian',
//     // q: '@realDonaldTrump',
//     count: 50
// }
// // T.get('/search/tweets.json', params, searchedData);

// function searchedData(err, data, response) {
//     for (var i = 0; i < data.statuses.length; i++) {
//         tweets.push(data.statuses[i].text);
//     };
//     // console.log(tweets);
//     textTweet = tweets.join(' ').toString();
//     console.log(textTweet);
// };



// ~~~~~~~~~~~
var express = require('express');
var app = express();

// set port number, means that heroku can set the port OR if it can't set it up for us it will be at port 8080
var port = process.env.PORT || 5000

// allows us to server static files (images, CSS, etc) allows us to run in __dirname (goes to folder name)
app.use(express.static(__dirname + "/public"));  // if you move your code to files

//routes, part of the URLness of a website
// When going to '/' route the response will render the index file, which is the index.html
app.get("/", function(req, res) {
	res.send('hello world');
	// res.json()
})

// server must listen for requests and send a resposne to each request
// you send a request whenever you go to a url, the server needs to start listening to a request.
app.listen(port, function() {
	console.log("app running");
})


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
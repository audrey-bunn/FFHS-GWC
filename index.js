function initialize() {
  const express = require('express');//Set up the express module
  const app = express();
  const router = express.Router();
  const path = require('path')//Include the Path module

  //set up the Express server to listen on port 3000 and logs some messages when the server is ready
  app.use(express.static('public'));
  let server = app.listen(3000, function() {
    console.log("App server is running on port 3000");
  });

  app.use(express.static('public'));
  app.use('/static', express.static('public'));

  //Initialize word list
    m = require('./module');
    var wordList = m.generateWordList();
    console.log(wordList);

}


//Main
initialize();

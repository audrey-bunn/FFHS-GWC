module.exports = {
  generateWordList: function() {
  var fs = require('fs');
  var array = fs.readFileSync('words.txt').toString().split("\n");
  return array;
},
}
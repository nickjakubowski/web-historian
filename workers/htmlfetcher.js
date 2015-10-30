// that are waiting.
// Use the code in `archive-helpers.js` to actually download the urls
var fs = require('fs');

exports.fetchHTML = function(url, filePath) {
  var read = fs.createReadStream(url);//pipe(fs.createWriteStream(filePath + '/' + url));
  console.log(read);
};

exports.fetchHTML()
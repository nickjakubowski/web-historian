var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelper = require('./http-helpers');
var htmlFetcher = require('../workers/htmlfetcher');
var fs = require('fs');

var actions = {
  'POST': function(req, res) {
    fs.appendFileSync(__dirname + '../test/testdata/sites.txt', req.url + '\n', 'utf-8');
    res.end();
  },
  'GET': function(req, res) {
    fs.readFile(__dirname + "/public/index.html", 'utf-8', function(err, data) {
      if (err) {
        throw err;
      }
      res.writeHead(200, httpHelper.headers);
      res.write(data);
      res.end();
    });    
  },
  'OPTIONS': function(req, res) {

  }
};

exports.handleRequest = function (req, res) {
  var action = req.method;

  console.log(fs.createReadStream('http://www.google.com'));

  if (action) {
    if (fs.existsSync(req.url)) {
      actions[action](req, res);
    } else {
      res.writeHead(404, null);
      res.end();
    }
    
  } 
}; 

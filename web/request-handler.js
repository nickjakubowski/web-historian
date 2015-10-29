var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var httpHelper = require('./http-helpers');
var fs = require('fs');

var actions = {
  'POST': function(req, res) {

  },
  'GET': function(req, res) {
    var html = "";
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
  if (action) {
    actions[action](req, res);
  } else {
    res.writeHead(400, null);
    res.end();
  }
  archive.readListOfUrls();
}; 

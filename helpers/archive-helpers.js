var fs = require('fs');
var path = require('path');
var _ = require('underscore');
// var download = require('download');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

// // I want the list of URLs here
// exports.readListOfUrls(function(arrayOfUrls) {
//   conso
// }); 


exports.readListOfUrls = function(callback) {
  var urlArray = [];
  fs.readFile(this.paths.list, 'utf-8', function(err, data) {
    if (err) {
      throw err;
    } else {
      callback(data.split('\n'));
    }

  });
};

exports.isUrlInList = function(url, callback) {
  exports.readListOfUrls(function(urls){
    return callback(_.contains(urls, url));
  });
};

exports.addUrlToList = function(url) {
  
};

exports.isUrlArchived = function() {
  // check if website html is already in database
};

exports.downloadUrls = function() {
  // download website
};

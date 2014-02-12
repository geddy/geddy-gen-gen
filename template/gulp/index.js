var path = require('path');
var gulp = require('gulp');

// load local gulpfile
var gulpFile = require('./gulpfile');

module.exports = function(appPath, args) {
  var task = args[0] || 'default';

  // start all the gulping
  gulp.start(task);
}

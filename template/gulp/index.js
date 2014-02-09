var path = require('path');
var gulp = require('gulp');

module.exports = function(appPath, args) {
  // load local gulpfile
  var gulpFile = require('./gulpfile');

  var task = args[0] || 'default';

  // start all the gulping
  gulp.start([task]);
}

var path = require('path');
var grunt = require('grunt');

module.exports = function(appPath, args, cb) {
  var task = args[0] || 'default';

  // start all the grunting
  grunt.tasks([task], { gruntfile: path.join(__dirname, 'Gruntfile.js'), done: cb });
};

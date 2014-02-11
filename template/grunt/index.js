var path = require('path');

module.exports = function(appPath, args) {
  var grunt = require('grunt');

  var task = args[0] || 'default';

  // start all the grunting
  grunt.tasks([task], { gruntfile: path.join(__dirname, 'Gruntfile.js') });
}

var fs = require('fs');
var path = require('path');
var appPath = process.env.appPath;

module.exports = function(grunt) {
  grunt.initConfig({

  });

  grunt.registerTask('default', function() {
    // add your code here
    console.log('This is the default task of this generator.\nIt does nothing yet.');
  });

  grunt.registerTask('help', function() {
    console.log(
      fs.readFileSync(
        path.join(__dirname, 'help.txt'),
        {encoding: 'utf8'}
      )
    );
  });
}
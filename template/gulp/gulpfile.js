var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var appPath = process.env.appPath;

gulp.task('default', function() {
  // add your code here
  console.log('This is the default task of this generator.\nIt does nothing yet.');
});

gulp.task('help', function() {
  console.log(
    fs.readFileSync(
      path.join(__dirname, 'help.txt'),
      {encoding: 'utf8'}
    )
  );
});
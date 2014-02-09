var fs = require('fs');
var path = require('path')
  , geddyPath = path.normalize(path.join(require.resolve('geddy'), '../../'));

// Load the basic Geddy toolkit
require(path.join(geddyPath,'lib/geddy'));

// Dependencies
var cwd = process.cwd()
  , utils = require(path.join(geddyPath, 'lib/utils'))
  , Adapter = require(path.join(geddyPath, 'lib/template/adapters')).Adapter
  , genDirname = path.join(__dirname, '..');

var gulp = require('gulp');
var gutil = require('gulp-util');

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
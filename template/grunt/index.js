var path = require('path');

module.exports = function(appPath, args) {
  var exec = require('child_process').exec;

  // start all the grunting
  var cmd = exec(path.join(__dirname, 'node_modules/grunt-cli/bin/grunt ' + args.join(' ')), {
    cwd: __dirname
  }, function() {

  });
  cmd.stdout.pipe(process.stderr);
  cmd.stderr.pipe(process.stdout);
}

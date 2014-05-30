var jake = require('jake');
var path = require('path');

module.exports = function(appPath, args) {
  var validTasks = ['default', 'help'];

  // keep support of old style gen syntax
  if (args.length > 0 && validTasks.indexOf(args[0]) === -1) {
    args = ['default[' + args.join(',') + ']'];
  }

  // force to load local Jakefile and jakelib
  args.push('--jakefile');
  args.push(path.join(__dirname,'Jakefile'));
  args.push('--jakelibdir');
  args.push(path.join(__dirname,'jakelib'));

  // run our tasks
  jake.run.apply(jake, args);
}
var jake = require('jake')
  , path = require('path')
  , genutils = require('geddy-genutils')
  , validTasks = ['default', 'help']
  , ns = 'myNamespace'; // TODO: insert your namespace here

module.exports = function(appPath, args) {
  genutils.jake.run(__dirname, ns, validTasks, args);
};
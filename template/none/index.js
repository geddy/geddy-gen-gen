var path = require('path');
var fs = require('fs');

module.exports = function(appPath, args) {
  if (args.length > 0 && args[0] === 'help') {
    console.log(
      fs.readFileSync(
        path.join(__dirname, 'help.txt'),
        {encoding: 'utf8'}
      )
    );
  }
  else {
    // add your code here
    console.log('This is the default task of this generator.\nIt does nothing yet.');
  }
}

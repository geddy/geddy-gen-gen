var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path')
  , utilities = require('utilities')
  , geddyPath = path.normalize(path.join(require.resolve('geddy'), '../../'));

// Load the basic Geddy toolkit
require(path.join(geddyPath,'lib/geddy'));

// Dependencies
var cwd = process.cwd()
  , utils = require(path.join(geddyPath, 'lib/utils'))
  , Adapter = require(path.join(geddyPath, 'lib/template/adapters')).Adapter
  , genDirname = path.join(__dirname, '..');


function getGenPath(genName)
{
  return path.join(process.cwd(), 'geddy-gen-' + genName);
}

// Tasks
task('default', {async: true}, function(genName, taskRunner) {
  var self = this;

  if (!genName) {
    fail('Generator name missing.');
    return;
  }

  // sanitize the gen name
  genName = genName.toLowerCase().replace(/\s|_/g, '-');

  // copy and parse template files
  var t = jake.Task['copy-template'];
  t.reenable();
  t.invoke.call(t, genName, taskRunner);

  // install node modules for generator
  t = jake.Task['npm-install'];
  t.reenable();
  t.once('done', function() {
    complete();
    self.emit('done');
  });
  t.invoke.call(t, genName);
});

task('copy-template', function(genName, taskRunner) {
  if (!taskRunner) {
    taskRunner = 'jake';
    console.log('No task runner given, using "jake" ...');
  }
  else {
    taskRunner = taskRunner.toLowerCase();
  }

  var supportedTaskRunners = ['jake', 'grunt', 'gulp', 'none'];

  if (supportedTaskRunners.indexOf(taskRunner) === -1) {
    fail('The task runner "' + taskRunner + '" is not supported.');
    return;
  }

  // create gen dir
  var genPath = getGenPath(genName);
  jake.mkdirP(genPath);

  // copy and parse shared templates
  var sharedPath = path.join(__dirname, 'template/shared');
  var sharedFiles = fs.readdirSync(sharedPath);

  sharedFiles.forEach(function(sharedFile) {
    var ext = path.extname(sharedFile).toLowerCase();

    if (ext === '.ejs') {
      var contents = fs.readFileSync(path.join(sharedPath, sharedFile), { encoding: 'utf8' });

      var adapter = new Adapter({engine: 'ejs', template: contents});

      fs.writeFileSync(
        path.join(genPath, path.basename(sharedFile, ext)),
        adapter.render({
          genName: genName,
          genPath: genPath,
          taskRunner: taskRunner
        }),
        'utf8'
      );
    }
    else {
      fs.writeFileSync(
        path.join(genPath, sharedFile),
        fs.readFileSync(path.join(sharedPath, sharedFile))
      );
    }
  });

  // copy task runner specifique files
  var taskRunnerPath = path.join(__dirname, 'template', taskRunner);
  var files = fs.readdirSync(taskRunnerPath);

  files.forEach(function(relPath) {
    var fullPath = path.join(taskRunnerPath, relPath);

    if (fs.statSync(fullPath).isDirectory()) {
      jake.cpR(fullPath, genPath, { silent: true });
    }
    else {
      fs.writeFileSync(
        path.join(genPath, relPath),
        fs.readFileSync(fullPath)
      );
    }
  });
});

task('npm-install', {async: true}, function(genName) {
  var self = this;

  if (!genName) {
    fail('Generator name missing.');
    return;
  }

  var genPath = getGenPath(genName);

  // install node modules
  var cmd = exec('npm install', {
    cwd: genPath
  }, function(err) {
    if (err) {
      fail(err.message);
      return;
    }

    console.log('\ngenerated generator "' + genName + '" in ' + genPath);
    complete();
    self.emit('done');
  });
  cmd.stderr.pipe(process.stderr);
  cmd.stdout.pipe(process.stdout);
});

task('help', function() {
  console.log(
    fs.readFileSync(
      path.join(__dirname, 'help.txt'),
      {encoding: 'utf8'}
    )
  );
});

testTask('Gens', ['clean'], function() {
  this.testFiles.exclude('test/helpers/**');
  this.testFiles.exclude('test/tmp/**');
  this.testFiles.include('test/**/*.js');
});

desc('Clears the test temp directory.');
task('clean', function() {
  console.log('Cleaning temp files ...');
  var tmpDir = path.join(__dirname, 'test', 'tmp');
  utilities.file.rmRf(tmpDir, {silent:true});
  fs.mkdirSync(tmpDir);
});
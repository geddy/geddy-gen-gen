if (process.argv.length >= 3) {
  var genDir = process.argv[2];
  var args = [];
  var task = process.argv[3] || null;
  if (task) args.push(task);

  var gen = require(genDir);
  gen(null, args);
}
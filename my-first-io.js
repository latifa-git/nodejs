var fs = require('fs');
var filename = process.argv[2];
file = fs.readFileSync(filename);
text = file.toString();
console.log(text.split('\n').length - 1);
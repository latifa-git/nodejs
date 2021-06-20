var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var ligne = contents.toString().split('\n').length - 1  
  console.log(ligne)  
})
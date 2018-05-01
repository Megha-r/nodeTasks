
// var fs = require('fs')
// var path = require ('path')
// const testFolder = './desktop/';
// fs.readdir(testFolder, function(err, list) {
//     list.forEach(function(file){
//         if (path.extname(file) === '.' + testFolder)
//         console.log(file);
    
//     })
//   })

var fs = require('fs');
var path = require('path');
var mydir = process.argv[2];
var ext1 = process.argv[3]
fs.readdir(mydir, function(err, files){
  if(err){
    throw err
  }
  //console.log(files);
  files.forEach(function(filename){
    var ext = path.extname(filename);
    if(ext == ext1){
      console.log(filename);
    }
  });
});
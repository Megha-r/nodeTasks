/**************************** Task 6************************************ 
Create a program that prints a list of files in a given directory, filtered by the extension of the files.
(With Modules) *********************************************************/ 

var fs = require('fs')
var path = require('path')

module.exports = function (dir,filterString,callback) 
{fs.readdir(dir, function (err, list) 
    {
    if (err)
      return callback(err)

    list = list.filter(function (file)
    {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
var moduleFn = require('./nodeProgram4.js')
moduleFn(process.argv[2], process.argv[3], function (err, list) {
    if (err)
      return console.error('There was an error:', err)
  
    list.forEach(function (file) {
      console.log(file)
    })
  })
  
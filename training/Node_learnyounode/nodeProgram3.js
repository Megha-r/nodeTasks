
/********************************************  Task 5 ********************************************
Create a program that prints a list of files in a given directory, filtered by the extension of the files. 
 ************************************************************************************** */
  var fs = require('fs')
  var path = require('path')
  
  fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
  })
/********************************* Task 8 ***********************************************
 *   Write a program that performs an HTTP GET request to a URL provided to  
  you as the first command-line argument. Collect all data from the  
  server (not just the first "data" event) and then write two lines to  
  the console (stdout).  

 */

var http = require('http')
var bl = require('bl')
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))  
  })
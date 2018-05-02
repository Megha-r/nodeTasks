
/********************************* Task 9 ***********************************************
 *   Write a program that uses a single asynchronous filesystem operation to  
     read a file and print the number of newlines it contains to the console 
 */
var bl = require('bl')
var http = require('http')
var results = []
var count = 0

for (var i = 0; i < 3; i++)
  httpGet(i)

  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {

        if (err)
          return console.error(err)
  
        results[index] = data.toString()
        count++
  
        if (count == 3)
        //console.data(data)
        
        results.forEach(function(result){
            console.log(result)
        })
      }))
    })
  }
/********************************* Task 4 ***********************************************
 *   Write a program that uses a single asynchronous filesystem operation to  
     read a file and print the number of newlines it contains to the console 
 */
var fs = require('fs')
var myNumber = undefined;
function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)
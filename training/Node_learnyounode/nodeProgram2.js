/********************************* Task 4 ***********************************************
 *   Write a program that uses a single asynchronous filesystem operation to  
     read a file and print the number of newlines it contains to the console 
 */
var fs = require('fs');
var file = process.argv[2];
 
fs.readFile(file, function (err, contents) {
    var lines = contents.toString().split('\n').length - 1;
    console.log(lines)
});
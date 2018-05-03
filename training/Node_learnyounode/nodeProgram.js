//***************************************  Task 1 ********************************* */
//***************** Print hello world in terminal ********************************* */

console.log("HELLO WORLD")


/***************************************  Task 2 ********************************* 
  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout). */

var result= 0;
for (var i = 2; i < process.argv.length; i++) {
    
    result += Number(process.argv[i])
  }
 console.log( result);


/***************************************  Task 3 ********************************* 
   Write a program that uses a single synchronous filesystem operation to  
   read a file and print the number of newlines (\n) it contains to the */ 

const fs = require('fs') 
//console.log(fs)
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length - 1
console.log(lines);

// //fs.writeFile('file/test.txt','aa', {})
// fs.readFileSync('file/test.txt', 'utf8', function (err,data) {
 
//   if (err) {
//     return console.log("There is an error");
//   }
  
  
  
//   var newLines = data.toString().split('\n').length - 1

  

 




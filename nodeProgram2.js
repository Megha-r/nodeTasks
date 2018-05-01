/********************************* Task 4 ***********************************************
 *   Write a program that uses a single asynchronous filesystem operation to  
     read a file and print the number of newlines it contains to the console 
 */

 const fs= require('file-system')
 fs.writeFile('file/test.txt','aa', function(err){})

 function addOne(callback) {
    fs.readFile('file/test.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log("There is an error");
        }
        else{
         
          var newLines = data.toString().split('\n').length - 1
        }
       
        callback()

       
      });
    
  }
  
  function myFunc() {
    console.log(newLines);
}
  
  addOne(myFunc)
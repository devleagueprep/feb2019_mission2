/*Congratulations Prepsters, you've been selected for your FINAL top secret mission. Should you choose to accept it, do a git fetch and a git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

As always, should you be caught copy and pasta code, the Secretary will disavow any knowledge of your actions. 

This repo will self-destruct in five seconds. Good luck!*/

/*Mission 1: Frank
Team Member: 

Create a function that will sum up only even numbers from 0 - 50.
*/


 /*Mission 2: Jess
 Team Member: 

 Create a function that will sum up only odd numbers from 0 - 50.
 */

 function oddSum() {
     var sum = 0;
     for (var i = 0; i < 51; i++) {
         sum+= i;
     }
     return sum;
 }

 console.log(oddSum());


 /*Mission 3: Jess
 Team Member: 

 Create a function that will sum up two numbers.
 */

 function sum(one, two) {
    return one+two;
 }

 console.log(sum(4,8));


 /*Mission 4: Frank
 Team Member: 

 Create a function that will multiply two numbers.
 */


 /*Mission 5:Jess
 Team Member: 

 Create a function that will iterate through the given array and returns a new array with only the even indexed items.
 */
var myMenu = ['carrot cake', 'brocolli', 'lemon bars', 'spinach', 'oreo cheesecake', 'alfalfa sprouts', 'brownies'];


function browseMenu(menu) {
    var newMenu = [];
    for (var i = 0; i < menu.length; i+= 2) {
        newMenu.push(menu[i]);
    }
    return newMenu;
}

console.log(browseMenu(myMenu));

/*Mission 6:Frank
Team Member: 

Create a function that will sum up numbers from 0 - 100. 
*/

/*Mission 7:Jess
Team Member:

Create a function that will reverse a string.

*/

function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(reverse('hello'));


/*Mission 8:Frank
Team Member: 

Create a function that will find the multiples of 3 from 0 - 100 and returns a new array of your results.
*/


/*Mission 9: Jess
Team Member: 

Create a function that will divide the following elements in the array by 2 and return a new array of your results.
*/
var numArr = [10, 20, 30, 40, 50];

function divideArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]/2);
    }
    return newArr;
}

console.log(divideArr(numArr));

/*Mission 10: Frank
Team Member: 

Create a function that will find the multiples of 5 from 0 - 100 and returns a new array of your results.
*/


/*Mission 11:
Team Member: 

Create a function that will iterate through the given array and pushes even indexed items into an array called evenDrinks and odd indexed items into an array named oddDrinks
 */
var myDrinks = ['malibu coke', 'gin tonic', 'old fashion', 'lemoncello tonic', 'long island ice tea', 'caipirinha', 'martini'];




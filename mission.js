/*Congratulations Prepsters, you've been selected for your FINAL top secret mission. Should you choose to accept it, do a git fetch and a git pull to find your specific mission. After you complete your mission, commit your work and do a pull request.

As always, should you be caught copy and pasta code, the Secretary will disavow any knowledge of your actions. 

This repo will self-destruct in five seconds. Good luck!*/

/*Mission 1: Frank
Team Member: 

Create a function that will sum up only even numbers from 0 - 50.
*/
function addEven(){
    var evenNumbers= [];
    var oddNumbers = [];
    for(i = 0; i<50; i++){
        if(i%2===0){
            evenNumbers.push(i);
        }else{
            oddNumbers.push(i);
    }
    }
    var sum = 0
    for(i = 0; i<evenNumbers.length; i++){
        sum += evenNumbers[i]
    }
    return sum;
}
console.log(addEven());

 /*Mission 2: Jess
 Team Member: 

 Create a function that will sum up only odd numbers from 0 - 50.
 */


 /*Mission 3: Jess
 Team Member: 

 Create a function that will sum up two numbers.
 */


 /*Mission 4: Frank
 Team Member: 

 Create a function that will multiply two numbers.
 */
function multiply(num1,num2){
    var sum = num1*num2;
    return sum
}
console.log(multiply(3,5))
 /*Mission 5:Jess
 Team Member: 

 Create a function that will iterate through the given array and returns a new array with only the even indexed items.
 */
var myMenu = ['carrot cake', 'brocolli', 'lemon bars', 'spinach', 'oreo cheesecake', 'alfalfa sprouts', 'brownies'];


/*Mission 6:Frank
Team Member: 

Create a function that will sum up numbers from 0 - 100. 
*/
function sumUp(){
for(i=0;i<100;i++){
    var sum = 0
    sum += i
}
return sum
}

console.log(sumUp())
/*Mission 7:Jess
Team Member:

Create a function that will reverse a string.


/*Mission 8:Frank
Team Member: 

Create a function that will find the multiples of 3 from 0 - 100 and returns a new array of your results.
*/
function findThree(){
    var threes = [];
    var notThrees = [];
    for(i = 0;i<100;i++){
        if(i%3 === 0){
            threes.push(i);
        }else{
            notThrees.push(i);
        }
    }
    return threes;
}

/*Mission 9: Jess
Team Member: 

Create a function that will divide the following elements in the array by 2 and return a new array of your results.
*/
var numArr = [10, 20, 30, 40, 50];


/*Mission 10: Frank
Team Member: 

Create a function that will find the multiples of 5 from 0 - 100 and returns a new array of your results.
*/
function findFive(){
    var fives = [];
    var notFives = [];
    for(i = 0;i<100;i++){
        if(i%5 === 0){
            fives.push(i);
        }else{
            notFives.push(i);
        }
    }
    return fives;
}
console.log(findFive())

/*Mission 11:
Team Member: 

Create a function that will iterate through the given array and pushes even indexed items into an array called evenDrinks and odd indexed items into an array named oddDrinks
 */
var myDrinks = ['malibu coke', 'gin tonic', 'old fashion', 'lemoncello tonic', 'long island ice tea', 'caipirinha', 'martini'];




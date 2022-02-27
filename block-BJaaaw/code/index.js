// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = prompt ("Enter a number");
if (number % 2 == 0){
  alert ("number is even")
}
if (number % 2 != 0){
  alert ("number is odd")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = prompt ("Enter a num1");
let num2 = prompt ("Enter a num2");
if (num1 > num2){
  alert (`${num1} is grater`);
}
else{
  alert (`${num2} is grater`);
}

// 3. Convert the above code using`?` terniary operator

num1 > num2 ? 
alert (num1)
:
alert (num2);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/


let house = prompt ("Enter house name");
if (house === "stark" ){
  alert (" Winter is coming") ;
}
else if (house === "lannister"){
  alert (" A lannister always pays his debt");
}
else{
  alert (" All men must die");
}

// 5. Convert the above code using`?` terniary operator

house == "stark" ? 
alert (" Winter is coming")
:
house == "lannister" ?
alert (" A lannister always pays his debt")
:
alert (" All men must die");

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber = Number (prompt ("number of the mounth"));
switch (monthNumber){
  case 4:
  case 6:
  case 9:
  case 11:
    alert ("number of days in month is 30");
    break;
  case 2:
    alert ("number of days in month is 28");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert ("number of days in month is 31");
    break;
  default :
    alert ("number of the month is more then 12");
} 

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/

let salery = Number (prompt ("Enter salery of the user"));
if (salery <= 20000){
  let in_Hand_Amount = salery - 0.1 * salery
  alert (in_Hand_Amount);
}
else if (salery <= 40000){
  let in_Hand_Amount = salery - 0.2 * salery
  alert (in_Hand_Amount);
}
else{
  let in_Hand_Amount = salery - 0.3 * salery
  alert (in_Hand_Amount);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number (prompt ("Enter marks"));
if (marks > 100) {
  alert ("Marks can't be greater than 100")
}
else if (marks > 80){
  alert ("Gread A");
}
else if (marks > 50){
  alert ("Gread B");
}
else if (marks > 30){
  alert ("Gread C");
}
else{
  alert ("Gread D");
}


switch (true){
  case marks > 100:
    alert ("Marks can't be greater than 100");
    break;
  case marks > 80:
    alert ("Gread A");
    break; 
  case marks > 50:
    alert ("Gread B");
    break;
  case marks > 30:
    alert ("Gread c");
    break;  
  default :
    alert ("Gread D");
  }


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt ("What is the weather like outside?");
if (weather == "sunny"){
  alert ("Wear a T-shirt");
}
else if (weather == "rainy"){
  alert ("Don't forget to take your raincoat");
}
else if (weather == "hot"){
  alert ("Get a hanky");
}
else if (weather == "freezing"){
  alert ("Get your sweeter on");
}
else {
  alert ("Not a valid input");
}
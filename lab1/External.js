//"use strict"

//console.log(number1);  //undefined
number1 = 3;
var number2 = 2.9;
var number3 = 0Xff;
var firstName = "Ahmed";
var middleName = 'Ibrahim';
var lastName = `Abdelhamed`;
firstName[3]='A';
console.log(firstName);  //nothing changed
var flag = true;

console.log("This is the External JavaScript file");
console.log("number1",typeof number1);
console.log("number2",typeof number2);
console.log("number3",typeof number3);
console.log("firstName",typeof firstName);
console.log("middleName",typeof middleName);
console.log("lastName",typeof lastName);

console.log(`${firstName} ${middleName} ${lastName}`);

var myArray = [number1, number2, number3, firstName, middleName, lastName, flag];
console.table(myArray);

//check if number1 is even or odd
if(number2 % 2 == 0){
    console.log("number2 is even");
}
else{
    console.log("number2 is odd");
}

for(var i = 1; i < 11; i++){
    console.log(i);
}

//check sign of number1
if(number1 > 0)
{
    console.log("number1 is positive");
}
else if(number1 < 0)
{
    console.log("number1 is negative");
}
else
{
    console.log("number1 is zero");
}

//multiblcation table
for(var i = 1; i <= 12; i++){
    console.log(`${number1} * ${i} = ${number1 * i}`);
}

//**************************************** */.
//take number from 1 to 7
switch (number1) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number, please enter a number between 1 and 7");
        break;
}
/**************Write a program that takes a day number and prints whether it's a
weekend or a weekday****/
number1 = 6;
if (number1 == 6 || number1 == 7) 
{
    console.log("It's a weekend");
}
else if (number1 >= 1 && number1 <= 5)
{
    console.log("It's a weekday");
} 
else
{
    console.log("Invalid number, please enter a number between 1 and 7");
}
/******************************************/
x = 3.14;   
console.log(x);
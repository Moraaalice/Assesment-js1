let food = "eating";
function eat(food){
    let food2 = food.reverse();
    console.log(food);
}
//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let year = 2002;
switch (year) {
    case 2000:
        console.log("This is a leap year");
        break;
    case 2001:
        console.log("This is not a leap year");
        break;
}

//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for(let s=0;s<=100;s++){
    if(s% 3&5 == 0){
        console.log("FizzBuzz")
        }else if(s%3==0){
            console.log("Fizz")
        }else(s%5==0);
        console.log("Buzz");
    }
//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73];
function multiply(numArray){
    for(let i=0;i<=numArray.length;i++){
        console.log(numArray[i*4]);
    }
}
multiply(numArray);
//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
let numb = ["10","24","45","56","67"];
let num2 = numb.toString();
console.log(num2);

//Write a function that takes in the following array and consoles the target if it is found else
//null
let num = [2,8,0,23,5,45,76]
Target = 23;
function numbers(){
}
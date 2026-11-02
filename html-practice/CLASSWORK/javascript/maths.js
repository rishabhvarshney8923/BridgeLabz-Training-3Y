// Math

let a = 4.5;

console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log(Math.pow(2, 3)); // 8


// Random Numbers

let num = Math.random(); // 0.000... to 0.999...

console.log(num);

num = Math.floor(Math.random() * 10); // 0-9
console.log(num);

num = Math.floor(Math.random() * 200) + 1; // 1-200
console.log(num);

num = Math.floor(Math.random() * 100) + 500; // 500-599
console.log(num);


// Universal Formula

let min = 5000;
let max = 6000;

num = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Random number ${num}`);


// Task-2: Create a Random OTP Generator Function

function generateOtp() {

    let min = 1000;
    let max = 9999;

    let num = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(num);
}

generateOtp();


// Arrays

let arr = [1, 2, "hi", true, "hello"];


// Printing Array Using Normal For Loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Push - Insert at Last

arr.push("ram");

for (let x of arr) {
    console.log(x);
}


// Unshift - Insert at Starting

arr.unshift("ram");

for (let x of arr) {
    console.log(x);
}


// Print Array in One Line

let s = "";

for (let i = 0; i < arr.length; i++) {
    s += arr[i] + " ";
}

console.log(s);
// type conversion
// implicit conversion
let result ="hello"+5;
console.log(result);
console.log(typeof result);

let result1=10-"4";
console.log(result1);
console.log(typeof result1);

let result2 = "value is "+ true;
console.log(result2);
console.log()

let strnumbr="123";
let num1=Number(strnumbr);
console.log(num1, typeof num1);

let num11=100;
let str1=String(num11);
console.log(str1, typeof str1);

let num2=290;
let str2=num2+"";
console.log(str2, typeof str2);

let add = function(a,b){
    return a+b;
}
let add23=(a,b)=>{
    return a+b;
}

function calculate(a,b,callback){
    return callback(a,b);
}
let sum=calculate(89,10,add);

let sum1=calculate(28,2,(a,b)=>{
    return a+b;
})
console.log(sum);
console.log(sum1);



let arr1=[1,2,4,4,5];
let fun =(x) =>{
    return x*2;
}
let res=arr1.map(fun);
console.log(res);
// remove apple
let arr2 = ["apple", "ram", "hasa", "apple", "apple"];

let res23 = arr2.filter((fruit) => fruit !== "apple");

console.log(res23);

// Objects

// let student = {
//     id : "101",
//     name : "Sagar",
//     marks : 90,
//     display : function(){
//         console.log(`Id : ${this.id} Name : ${this.name} Marks : ${this.marks}`);
//     }
// }

// // bracket notation
// console.log(student["name"]);

// // dot notation
// console.log(student.name);

class Student{
    constructor(id, name, marks){
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    display = () => {
        console.log("this is a student method");
    }
}

let studentarr =[
    {id:"101",name:"r",marks:"90"},
    {id:"102",name:"m",marks:"91"},
    {id:"103",name:"x",marks:"92"},
    {id:"104",name:"a",marks:"93"}
]






let a;
a = 'Hi';
console.log(a);

let b = 'Hello';
console.log(b);

const height = 180;

c = 1;
var c;
console.log(c);

//Name
//camelcase --> js

// Data Types
let o = null;
let u = undefined;
let mysting = 'Hello, World';
let myNumber = 3;
let myBooleean = true;
let myArr = [1, 'n', false, [3, '3']];
let myOpj = {name: 'Boom',age: 20, isStudent: true};

let num1 = 3+3-(3*3) /3;

// equal ===, !==, <, >, <=, >=
console.log('123' == 123); //true
console.log('123' === 123); //false 

//conditionals
let fruit = 'banana';

if(fruit === 'banana'){
  console.log('This is a banana');
}else if (fruit === 'apple'){
  console.log('This is an apple')
}else{
  console.log('Something else');
}

//Ternary Qp
const result = 10%2 === 0? 'even' :'odd';
console.log(result);

const fruits = ['apple' , 'mango' , 'banana' , 'orenge'];
console.log(fruits.length);
console.log(fruits[1]);

fruits.push('grape');
console.log(fruits);
console.log(fruits.length);

fruits.splice(0,2);
console.log(fruits);

//loop
for(let i = 0; i<fruits.length;i++){
  console.log(fruits[i]);
}

for(const f in fruits) {
  console.log(f);
}

//string concatenating
const name = 'Boom';
const greeting = 'Hello' + name;
const greeting2 = `Hello, ${name}`;
console.log(greeting);
console.log(greeting2);

//funtion

console.log(add(4,8));

function add(num1,num2){
  return num1 + num2;
}

const add2 = (num1 ,num2) => {
  return num1 + num2;
};

//callback func
function greeting3(callback){
  callback('Nice')
}

function loggreeting(name){
  console.log('Hello', name);
}

greeting3(loggreeting);

//object
const dog = {
  name: 'Bill',
  age: 13,
  color: 'black',
  parent: ['Jhon','Jane'],
  bark(){
    console.log('Wullf!!!');
  },
  introduce(){
    console.log(`I am dog named ${this.name}`);
  }
};

console.log(dog.name);
dog.bark();
dog.introduce();

console.log(dog.age);
dog.age = 20;
console.log(dog.age);

dog.breed = 'shiba';
console.log(dog.breed);

//สร้่าง object
const person = {
  name: 'Phurinat',
  surname: 'Wongkasetchai',
  years: 2,
  age: 20,
  status: 'startdy',
  introduce(){
    console.log(`my name is ${this.name} ${this.surname}`);
  },
  greeting(){
    console.log('Hi myfriends, nice to meet you');
  }
}

//Destructuring
const d1 = [1,2,3,4,20];
const d2 = {str: 'Hi', num: 2, bool: false, arr:[ 1,2,3]};

const [a1,a2,a3,...rest] = d1;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(rest);

const {bool, str, ...rest2} = d2;
console.log(bool);
console.log(str);
console.log(rest2);

//Basic Array Met
const user = [
  {
    id: 1,
    name: 'A',
    age: 44
  },
  {
    id: 2,
    name: 'B',
    age: 30
  },
  {
    id: 3,
    name: 'C',
    age: 22
  },
  {
    id: 4,
    name: 'D',
    age: 49
  },
];

user.forEach(function (u) {
console.log(u.name);
});

const userWithId3 = user.find((user) => user.id === 3);
console.log(userWithId3);

const indexofb = user.findIndex((user) => user.name === 'B');
console.log(indexofb);

const adults = user.filter((user) => user.age >= 30);
console.log(adults);

const usernamelist = user.map((user) => user.name);
console.log(usernamelist);

//สร้่าง
const newuserlist = user.map((user) => ({name: user.name, age: user.age}));
console.log(newuserlist);

const euser = user.find((user) => user.name === 'E');
console.log(euser);

user.forEach((user) => {
  user.greeting = function(){
    console.log(`Hello, my name is ${this.name}`);
  };
});

user[0].greeting();


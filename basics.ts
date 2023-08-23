

// Primitives

/*

// Numbers
let x = 10;
//let y = 123n;
let q = NaN;
console.log(typeof(q));

// String
let str1 = 'Hello';
//let symb = Symbol('qwerty');

// Boolean
let w = true;
w = false;
console.log(w);

// Nothing
let h: undefined = undefined;
let g: null = null;

// Literal
const n = 100;
const str2 = 'something';
console.log(typeof(n));
console.log(typeof(str2));

// Universal
let ii: any = 1;
ii = 'str';

let aa: unknown = 1;
if(typeof aa === 'number'){
    console.log('Number');
}
*/

// Functions

/*
function sum(a: number, b: number): number{
    return a + b;
}
console.log(sum(10,100));


function helloName(name: string): void{
    console.log('Hello, ', name);
}

function crash(): never{
    throw new Error('error'); 
}
*/

/*
function log(name: string, userID?: number){
    return (`Hello user ${name} with ID: ${userID || ''} `);
}

console.log(log('Dima', 12345));
console.log(log('Name1'));


function sum(...numbers: number[]){
    const sum = numbers.reduce((current, total) =>  current+total, 0);
    return sum;
};

console.log(sum(1, 2, 3));
*/

// Object Types

interface ICar{
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,

    [key: string]: unknown
}

const car: ICar = {
    wheels: 4,
    brand: 'Brand Name',
    type: 'Some Type'
}

const car2: ICar = {
    wheels: 6,
    brand: 'Brand Name',
    type: 'Some Type' 
}
car2.go = true;
car2['color'] = "white";
console.log(car2);
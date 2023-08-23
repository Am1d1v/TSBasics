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
function log(name, userID) {
    return ("Hello user ".concat(name, " with ID: ").concat(userID || '', " "));
}
console.log(log('Dima', 12345));
console.log(log('Name1'));

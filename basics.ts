

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

/*

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
*/

// Function with object

/*
function printPoint(point: {x: string, y: string}): void {
    console.log(`X:${point.x} Y:${point.y}`);
}

const point1 = {
    x: '2',
    y: '2'
}
printPoint(point1);

const point2 = {
    x: '10',
    y: '10',
    z: '10'
}
printPoint(point2);


function printUser( user: {
    firstName: string,
    secondName?: string
}): void{
    console.log((`Hello, ${user.firstName}`).toUpperCase());

    if(user.secondName){
        console.log((`Your surname is: ${user.secondName}`).toUpperCase());
    }
};

const user = {
    firstName: 'Dima',
    secondName: 'Surname'
}
printUser(user);
*/

// Arrays

/*
const arr = [1, 2, 3];

const strs: string[] = [];
strs.push('arrayItem0');
//strs.push(2); Error
console.log(strs);


interface ICar {
    wheels: number;
    brand: string;
}

const cars: ICar[] = [];
cars.push({wheels: 4, brand: "BrandName"});
console.log(cars);


const arrOfArray: string[][] = [];
arrOfArray.push(['123'])
console.log(arrOfArray);

function printArr(arr: unknown[]): void{
    arr.forEach((el, index) => {
        console.log(el, index);
    });
}
printArr(arr);
*/

// Tuples

/*
const pairs: [string, string][] = [['key1', 'value1'], ['key2', 'value2']];

const data: [number, boolean, string] = [1, true, 'srting'];
*/

// Aliases

/*
type MyBoolean = false | true;

type Pair = [string, string];
type Pairs = Pair[];

type User = {
    name: string;
    surname: string;
    birthYear: number;
}
*/

// Union

/*
type Status = 'ok' | 'loading' | 'error';

const server: Status = 'loading';

function printID(id: number | string): void{
    if(typeof(id) === 'string'){
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}
printID('username');
printID(123);


function welcome(persone: [string, string] | string){
    if(Array.isArray(persone)){
        console.log(`Hello, ${persone.join(' ')}`);
    } else {
        console.log(`Hello, ${persone}`);
    }
}
welcome(['Name', 'Surname']);
welcome('Name1');
*/

// Enum

enum KindOfShape {
    Circle, // 0
    Square  // 1
};

const myShape = KindOfShape.Circle;


enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 404,
    OK = 200
}

function serverStatus(currentStatus: StatusCode){
    if(currentStatus === 200){
        console.log('Server is OK');
    } else {
        console.log('Connection Failed');
    }
}
serverStatus(200);
serverStatus(404);



// Interfaces

/*
interface IUser {
    readonly email: string;
    readonly login: string;
    password: string; 
}

interface IUser {
    isOnline?: boolean;
}

const user1: IUser = {
    email: 'a@a.com',
    login: 'a',
    password: '123'
}

interface IPerson {
    name: string;
    surname: string;
    age: number;
    phone?: number;
}


interface Employee extends IUser, IPerson {
    contractStart: Date,
}
//const person1: Employee = {};
*/

// Aliases

/*
type Union1 = 'a' | 'b' | 'c';
type Union2 = 'a' | 'b' |'q' | 'w' | 'e';
type Union3 = Union1 | Union2;

type Union4 = 'r' | 't';
type Union5 = 'r' | 'y';
type Union6 = Union4 & Union5;
*/

/*
type Union1 = 'name' | 'surname';
type Union2 = 'phoneNumber' | 'birthDate';

type Union3 = {name: string, surname: string} & {phoneNumber: number, birthDate: Date};

const user: Union3 = {
    name: 'Name1',
    surname: 'Surname1',
    birthDate: new Date(1990, 6, 6),
    phoneNumber: 1234567890
}
*/

// Narrowing

/*
function example(x: number | string){
    if(typeof x === 'string'){
        console.log(x.toUpperCase());
    } else if (typeof x === 'number'){
        console.log(`x is number ${x}`);
    } else if (x === undefined){ 
        console.log('No Value');
    }
}
example('q');
example(0);


function example2(str: string | string[] | null){
    if(str && typeof str === 'object'){
        console.log(str.join(' '));
    } else if (typeof str === 'string'){
        console.log(str.toUpperCase());
    }
}
example2(['Something', 'Something']);
example2('user');


function example3(x: number[] | Date){
    if(x instanceof Date){
        console.log(x.getMonth());
    } else {
        console.log(Array.isArray(x));
    }
}
example3(new Date(1990, 10, 5));
example3([123]);
*/

// Type Guards

/*
type Fish = {swim: () => void};
type Bird = {fly: () => void};

/*
function typeOfCreature(creature: Fish | Bird){
    if('swim' in creature){
        console.log('Creature is fish')
    } else if('fly' in creature){
        console.log('Creature if bird');
    }
}

const creature1: Fish = {
    swim: () => {
    }
}
*/
/*
function creatureIsFish(creature: Fish | Bird): creature is Fish{
    return (creature as Fish).swim !== undefined;   
}
*/

// Asserts

/*
type User = {
    name: string,
    displayName: string | null,
}

function assertDisplayName(user: User): asserts user is User & {displayName: string}{
    if(!user.displayName){
        throw new Error('User has no DisplayName Field');
    }
}

function logUserByDisplayName(user: User){
    assertDisplayName(user);

    console.log(user.displayName.toUpperCase());
}
*/

// This

/*
function clickHandler(this: HTMLButtonElement, e: Event){
    this.disabled = true;
}
*/

// Recursive Types

type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
//nums.push('str'); Error

type JSONPrimitives = string | number | boolean | null;
type JSONObject = {[k: string]: JSONValue};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitives | JSONObject | JSONArray;


function isJSON(arg: JSONValue){

};
isJSON('Str');
isJSON(1);
isJSON({a: 123, b: {x: 1}});





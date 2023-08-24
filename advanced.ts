
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

type Union1 = 'name' | 'surname';
type Union2 = 'phoneNumber' | 'birthDate';

type Union3 = {name: string, surname: string} & {phoneNumber: number, birthDate: Date};

const user: Union3 = {
    name: 'Name1',
    surname: 'Surname1',
    birthDate: new Date(1990, 6, 6),
    phoneNumber: 1234567890
}
















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





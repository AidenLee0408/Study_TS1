// Generic

function getSize<T>(arr: T[]): number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1); //3

const arr2 = ["a", "b", "c"];
getSize<string>(arr2); //3

const arr3 = [false, true, true];
getSize(arr3); //3

const arr4 = [{}, {}, { name: "Tim"}];
getSize(arr4); //3

// interface에서 generic 사용

interface MobileG<T> {
    name: string;
    price: number;
    option: T;
}

const m1: MobileG<{color: string; coupon: boolean}> = {
    name: "S21",
    price: 1000,
    option: {
        color:"red",
        coupon: false,
    },
};

const m2: MobileG<string> = {
    name: "s20",
    price: 900,
    option: "good",
};

//------------------------------

interface UserG {
    name: string;
    age: number;
}

interface CarG {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const Guser: UserG = {name: "a", age: 10};
const Car : CarG = {name: "RR", color: "black"};
const book: Book = {price: 3000};

function showNameG<T extends { name: string}>(data: T): string {
    return DataTransfer.name;
}
showNameG(Guser);
showNameG(Car);
//showName(Book);
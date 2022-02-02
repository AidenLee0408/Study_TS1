type Score = 'A' | 'B' | 'C' | 'F';

interface User {
    name : string;
    age : number;
    gender? : string; //optional 선택
    readonly birthYear : number; // 최초 설정만 가능
    [grade : number] : Score;
}

let user : User = {
    name : 'Lee',
    age : 21,
    birthYear : 2002,
    1 : 'A',
    // 2 : 'G' -> Score에 정의되어 있지 않으므로 오류
}

user.age = 10;
user.gender = "male"
// user.birthYear = 2012 -> 변경할 수 없으므로 오류가 뜸

console.log(user.age)


// interface 함수 정의

interface Add {
    (num1:number, num2:number) : number;
}

const add : Add = function(x, y) {
    return x + y;
}

add(10,20);

//

interface IsAdult {
    (age:number): boolean;
}

const A:IsAdult = (age) => {
    return age > 19;
}

A(21) // true

// implements - interface로 Class 정의

interface Car {
    color: string;
    wheels: number;
    start(): void;
}

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price : number;
}

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz : Benz = {
    door : 2,
    stop(){
        console.log('stop');
    },
    color: 'black',
    wheels: 4,
    start() {
        console.log('go ...');
    }

}

class Bmw implements Car {
    color;
    wheels = 4;

    constructor(c:string) {
        this.color = c;
    }

    start() {
        console.log('go ...');
    }
}

const B = new Bmw('green');

console.log(B)

B.start

// extends
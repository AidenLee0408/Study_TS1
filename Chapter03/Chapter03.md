# 함수 (Function)

```
// 함수 

function addf (num1: number, num2: number) : void {
    //return num1 + num2;
    console.log(num1+num2);
}

function isAdultf (age: number): boolean {
    return age > 19;
}

// -------------------------------------

function hello(name?: string) {
    return 'Hello, ${name || "world"}';
}

function hello2(name?: string) {
    return 'Hello, ${name}';
}

const resultf = hello();
const resultf1 = hello("Sam");
// const resultf2 = hello(123);

function hello3 (age: number | undefined, name: string) {
    if (age !== undefined) {
        return 'Hello, ${name}. You are ${age}.';
    } else {
        return 'Hello, ${name}';
    }
}

console.log(hello3(30, "Sam"));
console.log(hello3(undefined, "Sam"));

// 함수 - 매개변수에 타입 작성법

function addf2(...numsf: number[]) {
    return numsf.reduce((result, num) => result + num, 0);
}

addf2 (1,2,3);
addf2 (1, 2, 3, 4, 5, 6 ,7, 8, 9, 10);

// 함수 - this

interface Userf {
    name: string;
    age?: number;
}

const Ben: Userf = {name: 'Ben'}

function showName(this:Userf, age: number, gender:'m'|'f') {
    console.log(this.name, age, gender)
}

const af = showName.bind(Ben);
af(30, 'm');

// 동일 함수이지만 매개변수에 타입이나 갯수에 따라 다르게 동작해야 된다면 오버로드 사용 
function join(name: string, age: string): string 
function join(name: string, age: number): Userf
function join(name: string, age: number | string): Userf | string {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요.";
    }
}

const Alice: Userf = join("Alice", 30);
const Jane: string = join("Jane", "25");

```

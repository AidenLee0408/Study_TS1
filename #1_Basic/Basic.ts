// string, number, boolean

let car: string = 'bmw';

let age: number = 21;

let isAdult : boolean = true;

// Array - type[], Array<type>

let a : number[] = [1,2,3];
let a2 : Array<number> = [1,2,3];

let week1 : string[] = ['mon', 'tue', 'wed'];
let week2 : Array<string> = ['mon', 'tue', 'wed'];


// 튜플 (tuple)
let b:[string, number];

b = ['z',1];

b[0].toLowerCase();

// void, never

function sayHello():void {
    console.log('hello');
}

function showError():never {
    throw new Error();
}

function infLoop():never {
    while(true) {
        // do something ....
    }
}

// enum

enum Os {
    window = 'win',
    Ios = 'ios',
    Android = 'and'
}

let myOs : Os;

myOs = Os.window

// null, undefined

let n : null = null;
let u : undefined = undefined;
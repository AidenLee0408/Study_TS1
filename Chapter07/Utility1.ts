// keyof : key 값을 사용하면 interface의 값들을 union으로 받을 수 있음

interface UserU {
    id: number;
    name: string;
    age: number;
    gender:  "m" | "f";
}

type UserKey = keyof UserU; // -> 'id' | 'name' | 'age' | 'gender'

const uk:UserKey = "age";

// Partial<T> : property를 모두 optional로 바꿔줌 -> 일부만 사용할 수 있도록 해줌

interface UserU {
    id: number;
    name: string;
    age: number;
    gender:  "m" | "f";
}

let admin: Partial<UserU> = {
    id: 1,
    name: "Bob",
};

// Required<T> : 모든 property들을 필수로 만들어줌

interface UserU {
    id: number;
    name: string;
    age: number;
    gender:  "m" | "f";
}

let admin1 : Required<UserU> = {
    id: 1,
    name: "Bob",
    age:30,
    gender: "m",
};

//Readonly : 처음에 값을 할당하면 이후에 짜여진 코드로는 값을 수정할 수 없다

interface UserU {
    id: number;
    name: string;
    age: number;
    gender:  "m" | "f";
}

let admin2: Readonly<UserU> = {
    id: 2,
    name: "Alice",
    age: 10,
    gender: "m",
};

// admin2.id = 4; -> 값 변경 불가능



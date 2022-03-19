# Interface (인터페이스)

```
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
```

> proterty를 정의해서 객체를 표현하고자 할 때는 interface를 사용

user를 정의 할 때 User interface에 있는 속성 값들은 모두 기입해야만 사용이 가능합니다. 또한 User interface에 없는 속성값들을 입력해주면 에러가 발생합니다.

> optional  ?

속성값 뒤에 ?를 붙여주면 선택사항으로 변경 가능해 필수 입력사항이 아니게 만들어 줄 수 있습니다.

> readonly

readonly는 읽기 전용 속성이기 때문에 수정할 수 없고 읽기 만 가능합니다.

> 문자열 index 설명을 추가하는 방법 

대괄호 [ ] 안에 속성값과 key를 입력하고 value를 적어주면 다음 코드들처럼 학년과 점수를 여러 개 받을 수 있습니다.



### interface로 함수 정의

```
// interface 함수 정의

interface Add {
    (num1:number, num2:number) : number;
}

const add : Add = function(x, y) {
    return x + y;
}

add(10,20);
```

1. 인자 값과 리턴 값을 적어줍니다. (인자 값: 리턴 값) : 리턴값
2. add라는 함수를 하나 만들어주고 방금 만든 interface로 정의를 해줍니다. 



> 나이를 받아서 성인인지 boolean 값을 리턴해주는 함수 정의

```
interface IsAdult {
    (age:number): boolean;
}

const A:IsAdult = (age) => {
    return age > 19;
}

A(21) // true
```



### Implements, extends

```
// implements - interface로 Class를 정의

interface Car {
    color: string;
    wheels: number;
    start(): void;
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

// extends - 추가 확장

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

// 여러개 확장

interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price : number;
}

```

> implements라는 키워드로 interface로 class를 정의할 수 도 있습니다.

1.Car라는 interface를 먼저 정의 해줍니다. 

2.Car라는 interface를 implements를 통하여 bmw라는 class를 만들어줍니다.

 3.bmw의 Car의 속성값을 집어넣어주면 class로 사용이 가능합니다.



> interface는 extends라는 키워드를 사용하여 확장이 가능합니다.

1. Benz라는 새로운 interface를 만들어줍니다.
2.  Benz에 Car의 기존 속성을 입력해주고 extends를 통하여 door이나 stop()함수도 추가로 속성에 정의가 가능합니다.



> 추가적으로 확장은 여러개를 추가로 확장도 가능합니다.

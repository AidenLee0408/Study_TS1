# 기본 타입(Basic Type)



## 문자 (String), 숫자 (number), 참과 거짓(boolean)

```
let car: string = 'bmw';

let age: number = 21;

let isAdult : boolean = true;
```

car에서 bmw는 문자열이기 때문에 string을 타입으로 지정해줍니다.<br>
age에서 21은 숫자이기 때문에 number를 타입으로 지정해줍니다.<br>
isAdult에서 true값은 참과 거짓이기 때문에 true를 타입으로 지정해줍니다.
<br><br>





## 배열 (Array)

```
// Array - type[], Array<type>

let a : number[] = [1,2,3];
let a2 : Array<number> = [1,2,3];

let week1 : string[] = ['mon', 'tue', 'wed'];
let week2 : Array<string> = ['mon', 'tue', 'wed'];
```

a에서 [1, 2, 3]은 숫자 배열이기 때문에 number를 입력해주고 [  ]를 함께 입력해주면 숫자 배열로 타입을 지정됩니다.<br> 
혹은 Array< number >와 같이 입력해도 됩니다. 문자열 배열도 마찬가지로 number자리에 string을 입력해주시면 타입이 지정됩니다.
<br><br>




## 튜플 (tuple)

```
let b:[string, number];

b = ['z',1];
```

배열과 같은 모습인데 인덱스별로 타입이 다를때 사용할 수 있습니다. <br>
배열의 첫번째에는 string이 들어가있고 배열의 두번째에는 number가 들어있습니다.<br>
따라서 첫번째 배열에는 문자열만 들어갈 수 있고 두번째 배열에는 숫자만 들어갈 수 있습니다.
<br><br>




## void

```
function sayHello():void {
    console.log('hello');
}
```

void는 주로 함수에서 아무것도 반환하지 않을 때 사용됩니다.
<br><br>




## never

```

function showError():never {
    throw new Error();
}

function infLoop():never {
    while(true) {
        // do something ....
    }
}
```

never는 항상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용할 수 있습니다.
<br><br>




## enum

```
enum Os {
    window = 'win',
    Ios = 'ios',
    Android = 'and'
}

let myOs : Os;

myOs = Os.window
```

enum은 자바스크립트에는 없는 타입입니다. 비슷한 값들끼리 모여 있을 때, 특정한 것만 입력할 수 있게 강조하고 싶을 때 그리고 그 값들이 공통점이 있을 때 사용할 수 있습니다.
<br><br>




## null과 undefined

```
let n : null = null;

let u : undefined = undefined;
```

다음과 같이 null과 undefined를 사용할 수 있습니다.<br>
null은 의도적으로 특정한 값이 없음을 명시할때 사용하는 타입입니다.<br>
undefined는 아무값도 할당받지 않았을때 사용하는 타입입니다.

# Class (클래스)

```
class CarC {
    //color: string;
    constructor(readonly color: string){
        this.color = color;
    }
    start() {
        console.log("start");
    }
}

const bmw = new CarC("red");

// 접근제한자 (Access modifier) - public, private, protected

/* 정리
public - 자식 클래스,. 클래스 인스턴스 모두 접근 가능
protected - 자식 클래스에서 접근 가능
private - 해당 클래스 내부에서만 접근 가능
*/

// 아무것도 적지 않았을경우는 public
class CarC2 {
    #name: string = "car";
    color: string;
    constructor (color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(this.#name);
    }
} // private나 #를 앞에 쓸 경우 이 Class에서만 사용가능

class Audi extends CarC2 {
    constructor ( color: string) {
        super(color);
    }
    showName() {
        // console.log(super.#name); #가 적혀있기 때문에 해당 class에서는 사용할 수 없음.
    }
}

const A8 = new Audi("black");

// ---------------------------

class CarC3 {
    protected name: string = "car";
    color: string;
    constructor (color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
        console.log(this.name);
    }
} // 자식클래스에서는 사용이 가능하나 class instance에서는 사용이 불가능하다.

class Audi2 extends CarC3 {
    constructor ( color: string) {
        super(color);
    }
    showName() {
        console.log(super.name);
    }
}

const A7 = new Audi2("black");
// console.log(A7,name);

// static - 앞에 class명을 쓰고 사용
class CarC4 {
    readonly name: string = "car";
    color: string;
    static wheels = 4;
    constructor (color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    start() {
        console.log("start");
        console.log(this.name);
        console.log(CarC4.wheels);
    }
} 

class Audi3 extends CarC4 {
    constructor ( color: string, name: string) {
        super(color, name);
    }
    showName() {
        console.log(super.name); 
    }
}

const Rs7 = new Audi3("black", "RSS7");
console.log(CarC4.wheels);

// ---------------------------
// 추상 class - abstract
// 추상화(abstract)란 property나 method에 이름만 선언해주고 구체적인 기능은 상속 받는 곳에서 구현
// 해당 추상 class를 상속받아 만들어진 수 많은 객체들이 동일한 method를 가지고 있지만 구체적인 기능은 가지각색일 수 있다

abstract class CarC5 {
    color: string;
    constructor (color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract dosomething(): void; // <----
} 

// const carnewname = new CarC5("red"); 

// 오로지 상속으로만 사용 가능
class Audi4 extends CarC5 {
    constructor ( color: string) {
        super(color);
    }
    dosomething(): void {
        alert(3);
    } // 추상화 객체의 구체적인 기능
}

const A9 = new Audi4("black");
// console.log(A7,name);
```


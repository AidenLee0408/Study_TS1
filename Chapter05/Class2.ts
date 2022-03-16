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
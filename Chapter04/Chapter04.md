# Intersection Types (교차가능한 타입)

```
// Intersection Types 교차가능한 타입

interface CarI {
    name: string;
    start() : void;
}

interface Toy {
    name: string;
    color: string;
    price: number;
}

const toyCar: Toy & CarI = {
    name : "타요",
    start(){},
    color: "blue",
    price: 1000,
};
```





# Literal (리터럴)

```
// Literal Types

const userNameL = "Ben";

let userNameL2 : string | number = "Tom";

type Job = "police" | "developer" | "teacher";

interface Userl {
    name : string;
    job : Job;
}

const userl: Userl = {
    name: "Ben",
    job: "developer",
};

interface HighSchoolStudent {
    name: string;
    grade: 1 | 2 | 3;
}

```



# Union (유니온)

```
// Union Types => Anything | anything

interface CarU {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: CarU | Mobile) {
    console.log(gift.color);
    if(gift.name === "car") {
        gift.start();
    } else {
        gift.call();
    } // 식별 가능한 유니온 타입
}
```


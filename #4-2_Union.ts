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
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
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
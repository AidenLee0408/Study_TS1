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


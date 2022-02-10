// Record <K, T> : K = key, T = type

interface UserU2 {
    id: number;
    name: string;
    age: number;
}

function isValid(user: UserU2) {
    const resultU: Record<keyof UserU2, boolean> = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
    };
    return resultU;
} // 적절한 값이 입력되었는지 확인하는 함수

// Pick<T, K> : T타입에서 K property만 골라서 사용

interface UserU {
    id: number;
    name: string;
    age: number;
    gender:  "m" | "f";
}

const admin4: Pick<UserU, "id" | "name"> = {
    id: 0,
    name: "Bob",
};

// Omit<T,k> : 특정 property를 생략하고 사용가능

interface UserU {
    id: number;
    name: string;
    age: number;
    gender:  "m" | "f";
}

const admin5: Omit<UserU, "age" | "gender"> = {
    id: 1,
    name: "Bob",
};

// Exclude<T,k> : omit과 다르게 type으로 제거

type U1 = string | number | boolean;
type U2 = Exclude<U1, number | string>;

// NonNullable<Type> : Null을 제외한 타입을 생성, undefined도 함께 제외

type U3 = string | undefined | void;
type U4 = NonNullable<U3>;
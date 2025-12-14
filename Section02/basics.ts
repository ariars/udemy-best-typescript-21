/* 함수 타입 및 반환 타입 (Function Types and Return Types) */
function add(n1: number, n2: number, showResult: boolean, phrase: string) : number | void {
    if(showResult) {
        console.log(phrase + (n1 + n2));
        return;
    }

    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result);


/* 타입 추론 (Type Inference)) */
const num: number = 5;  // X (안 좋은 방법)

// 첫 번째 방법
const num2 = 5;

// 두 번째 방법
let num3: number; 
num3 = 5;


/* 객체 타입 (Object Types) */

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person1 = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

const person: {
    name: string;
    age: number;
    hobbies: string[]; // array
    role: [number, string]; // tuple
    baseRole : Role;
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'],
    baseRole: Role.ADMIN
};

// 오류: 'Nickname' 속성은 'person' 객체에 존재하지 않음
// console.log(person.Nickname);

console.log(person1.name); // 오류: 'name' 속성은 'object' 타입에 존재하지 않음
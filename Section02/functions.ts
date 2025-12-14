function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log("Result: " + num);
}

// function printResult1(num: number) {
//     console.log("Result: " + num);
//     return;
// }

// function printResult2(num: number): undefined {
//     console.log("Result: " + num);
//     return;
// }

// printResult(add(5, 12));
// console.log(printResult1(add(10, 20)));
// console.log(printResult2(add(10, 20)));

let combinedValues: Function;
combinedValues = add;
combinedValues = printResult;

console.log(combinedValues(8, 8));

// callback function
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
// }

// addAndHandle(10, 20, (result) => {
//     console.log(result);
//     return result;
// });
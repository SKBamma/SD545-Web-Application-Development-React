/*
1.Create a function using function declaration named sum with one parameter of Array type, 
the returned result is the sum of all elements which are greater than 20.
*/
// function declartion
function sum(arr) {
    const result_Sum = arr.filter((item) => item > 20)
        .reduce(((accum, current) => accum + current), 0);
    return result_Sum;

}
const numArr = [10, 0, 25, 35, 18];
console.log(sum(numArr));


/*
2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
*/
//function expression
const getNewArray = function (strArr) {
    const newArray = strArr.filter((item) => item.length >= 5 && item.includes('a'));
    return newArray;
};
const string_Arr = ["Nepal", "Chaina", "USA", "chili"];

console.log(getNewArray(string_Arr));


/*
3. Implement an arrow function with feature below:
concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
*/
// arrow function
const concat = (str, arrNum, arrStr) => {
    const result = [...str, ...arrNum, ...arrStr];
    return result;
};
console.log(concat('hi', [1, 2, 3], ['Hello', 'world'])); 
// Function - piece of code that can be reused in a program.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 89, 90, 34]
let numbers4 = [1, 2, 3, 4]
let numbers5 = [1, 2, 3, 4, 5, 6, 7, 8]
let numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 89, 56, 78, 34, 23, 12]
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 89, 56, 78, 34, 23, 12, 13, 34, 45, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 89, 56, 78, 34, 23, 12, 13, 34, 45,]





// function sumOfArray(n) {
//     let sumOfAnArray = 0
//     for (let i = 0; i <= n.length; i++) {
//         sumOfAnArray += i
//     }
//     console.log(sumOfAnArray)
// }

function sumOfArray(n) {
    let sumOfAnArray = 0
    for (let i = 1; i <= n; i++) {
        sumOfAnArray += i
    }
    // console.log(sumOfAnArray)
    return sumOfAnArray
}

// sumOfArray(numbers)
// sumOfArray(numbers2)
// sumOfArray(numbers4)
// sumOfArray(numbers5)
// sumOfArray(numbers6)
// sumOfArray(numbers1)
let sum = sumOfArray(344545)

sum / 1000
console.log(sum)

// 5500, 4050, 4500, 5050
// 505000, 500500
var names = ['Peter', 'Samuel', 'Raga', 'Paul', 'Shian', 'Karen', 'Dan', 'Ruth', 'Getty', 'Immaculate', 'Emmanuel']

// DRY principle - Do not Repeat Yourself

// console.log("Good morning " + names[0])
// console.log("Good morning " + names[1])
// console.log("Good morning " + names[2])
// console.log("Good morning " + names[3])
// console.log("Good morning " + names[4])
// console.log("Good morning " + names[5])
// console.log("Good morning " + names[6])
// console.log("Good morning " + names[7])
// console.log(names.length)
// let i = 0
// for (; i < names.length; i++) {
//     console.log("Good morning " + names[i])
// }


// let sum = 0
// let a = 0;
// for (;a <= 10; a++) {
//     console.log("sum before:", sum)
//     console.log("a:", a)
//     sum = sum + a
//     console.log("sum after:", sum)
// }
// console.log("Sum: ", sum)


// for (let i = 10; i > 0; --i) {
//     console.log(i)
// }

// let i = 10
// do {
//     console.log(i)
//     i--
// }
// while(i > 0)

// let i = 10
// while (i > 0) {
//     console.log(i)
//     i--
// }

// function designerPdfViewer(h, word) {
//     // Write your code here
//     let indexAarr = []
//     for (let i = 0; i < word.length; i++) {
//         if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
//             indexAarr.push(word.charCodeAt(i) - 97)
//         }
//     }
//     for (let i = 0; i < indexAarr.length; i++) {
//         for (let j = 0; j < h.length; j++) {
//             if (indexAarr[i] == j) {
//                 indexAarr[i] = h[j]
//             }
//         }
//     }
//     return Math.max(...indexAarr) * indexAarr.length
// }


// h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
// word = "abc"
// designerPdfViewer(h, word)

// function minimumNumber(n, password) {
//     // Return the minimum number of characters to make the password strong
//     let numbers = "0123456789"
//     let lower_case = "abcdefghijklmnopqrstuvwxyz"
//     let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let special_characters = "!@#$%^&*()-+"
    
//     let num = 0
    
//     password.split("").forEach(
//         element => {
//             if(!(numbers.split("").includes(element))) {
//                 num++
//             }
//             if(!(lower_case.split("").includes(element))) {
//                 num++
//             }
//             if(!(upper_case.split("").includes(element))) {
//                 num++
//             }
//             if(!(special_characters.split("").includes(element))) {
//                 num++
//             }
//         }
//     )
//     return num
// }

// function camelcase(s) {
//     // Write your code here
//     var words = 1
//     s.split("").forEach(
//         (value, index) => {
//             if (s.charCodeAt(index) <= 90) {
//                 words++
//             }
//         }
//     )
//     return words
// }

function repeatedString(s, n) {
    // Write your code here
    if(isFinite(n)) {
        let newS = s.repeat(n)
        let str = newS.slice(0, n)
        let a = 0
        str.split("").forEach(
            value => {
                if (value === 'a') {
                    a++
                }
            }
        )
        return a
    }
    return n
}
let s = 'aba'
let n = 10

console.log(repeatedString(s, n))
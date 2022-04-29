// function diagonalDifference(arr) {
//     // Write your code here
//     let firstSum = 0
//     let secondSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         let element = 0
//         for (let j = 0; j < arr[i].length; j++) {
//             if (i == j) {
//                 firstSum += arr[i][j]
//             }
//         }
//     }
//     // arr.reverse()
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].reverse()
//     }
//     for (let i = 0; i < arr.length; i++) {
//         // let element = arr[i][0]
//         for (let j = 0; j < arr[i].length; j++) {
//             if (i == j) {
//                 secondSum += arr[i][j]
//             }
//         }
//     }
//     return Math.abs(firstSum - secondSum)
// }

// let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

// console.log(diagonalDifference(arr));

// function miniMaxSum(arr) {
//     // Write your code here
//     let anotherArr = [...arr]
//     let sumArr = []
//     let sum = anotherArr.reduce((sum, a) => sum + a)
//     for (let i = 0; i < arr.length; i++) {
//         let innerSum = sum - arr[i]
//         sumArr.push(innerSum)
//     }
//     // return Math.max(sumArr)+ "  " + Math.min(sumArr)
//     // return sumArr
//     return Math.max(...sumArr)
// }

// let arr = [1, 2, 3, 4, 5]
// console.log(miniMaxSum(arr))

// function timeConversion(s) {
//     // Write your code here
//     let newS = s.split(":")
//     let amorpm = Array.from(newS[2]).splice(2, 4).join("")
//     let s1 = newS[2].split("")
//     newS[2] = newS[2].split("").splice(0, 2).join("")
//     // newS[3] = s1.splice(2, 4).join("")
//     // newS[2].splice(2, 2)
//     let hour = parseInt(newS[0])
//     if (amorpm == "AM" && hour == 12) {
//         hour == 00
//         newS[0] == hour
//     }
//     if (amorpm == "PM" && hour == 12) {
//         hour  == 12
//         newS[0] == 00
//     }
//     if (amorpm == "PM" && hour < 10) {
//         hour += 12
//         newS[0] = hour
//     }
//     if (hour == 10 || hour == 11) {
//         newS[0] == newS[0]
//     }
    
//     // return amorpm
//     return newS.join(":")
// }

// let s = "07:05:45PM"
//  let s = "10:05:45PM"
// let s = "00:05:45AM"
// console.log(timeConversion(s))
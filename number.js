// function convertToRoman(num) {
//     console.log(num)
//     let ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//     let tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
//     let hunds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
//     let thousands = ["", "M", "MM", "MMM"];
  
//     let roman = thousands[Math.floor(num / 1000)] + hunds[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[Math.floor(num % 10)]
//    console.log(roman)
//   }
  
// console.log(convertToRoman(400));

// function deleteNth(arr,n){
//   // ...
//   let newarr = [];
//   let count = {};
//   for (let element of arr) {
//     if (count[element]) {
//       count[element] += 1
//     }
//     else {
//       count[element] = 1
//     }
//   }
//   for (let key in count) {
//     for (let i = 0; i < n; i++) {
//       newarr.push(key)
//     }
//   }
//   return newarr;
// }


// console.log(deleteNth([20, 37, 20, 21], 1))

// function sequenceSum(begin, end, step){
//   //your code here
//   let sum = 0;
//   if (begin > end && step > 0) {
//         console.log(begin, end, sum)
//     return 0;
//   }
//   if (end > begin && step < 0) {
//         console.log(begin, end, sum)
//     return 0;
//   }
//   if (begin > end && step < 0) {
//     while (begin >= end) {
//       sum += begin
//       begin += step
//     }
//     console.log(begin, end, sum)
//     return sum;
//   }
//   for (let i = begin; i <= end; i += step) {
//     sum += i;
//   }
//   console.log(begin, end, sum)
//   return sum;
// }

// console.log(sequenceSum(-570331, -65428034, -15))

function correct(string)
{
	// your code here
  let arr = [...string]
  let text = ""
  for (let value of arr) {
    if (value == 5) {
      text += "S"
    }
    else if (value == 0) {
      text +="O"
    }
    else if (value == 1) {
      text += "I"
    }
    else {
      text += value
    }
  }
  return text;
}

console.log(correct("L0ND0N"))
// Objects organise data as key, value pairs
// let obj = new Object();
// let anotherObj = {name: "John"};
// console.log(obj)
// obj.name = "Sam";
// obj["age"] = 45
// console.log(obj);
// console.log(anotherObj)

// let obj = {};
// obj.name = "Sam"
// obj["age"] = 23;
// console.log(obj)


// function createObj(name, age) {
//     return {name: name, age: age}
// }
// let a = createObj("Sam", 45)
// a.id_no = 34232323
// a["surname"] = "Karoki"

// // console.log(a["age"])
// // console.log(a)

// for (let i in a) {
//     console.log(i + ": " + a[i])
// }

const obj = {
    name: "Sam",
    balance: 500000,
    active: true,
    pin: 1234,
    withdraw: function(amount, p) {
        if (this.pin == p && amount <= this.balance) {
            this.balance -= amount;
        }
        if (this.pin != p){
            console.log("Wrong PIN");
        }
        if (amount > this.balance) {
            console.log("Account balance Insufficient");
        }
    },
    deposit: function(amount) {
        this.balance += amount
    }
}
console.log(obj)

let o = new Object(obj)
let r = new Object(obj)
o.name = "William"
// o.withdraw(500000, 1234)
// console.log(o)
// console.log(r)
console.log(obj.name)
console.log(r.name)
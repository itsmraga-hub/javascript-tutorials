function Train() {
    this.sound = "Choo Choo"
}

let M = new Train()
let S = new Train()
Train.prototype = {
    speed: 350
}
function incrementSpeed(train) {
    return train.speed + 50
}

console.log(incrementSpeed(M))
function DecimalToBinaryConverter(baseTen) {
    let binaryNumber = []

    while (baseTen > 0) {
        let rem = baseTen % 2
        binaryNumber.push(rem)
        baseTen = Math.floor(baseTen / 2)
    }

    return parseInt(binaryNumber.reverse().join(""))
}

function BinaryToDecimalConverter(baseTwo) {
    let bin = baseTwo.toString().split("")
    let power = 0
    let num = 0
     
    for (let i = bin.length - 1; i >= 0; i--) {
        num += bin[i] * (2 ** power)
        power++
    }
    
    return num
}

function DecimalToHexaDecimal(baseTen) {
    let HexaNo = []
    while (baseTen > 0) {
        let rem = baseTen % 16
        if (rem < 10) {
            HexaNo.unshift(rem)
        }
        else if (rem == 10) {
            HexaNo.unshift('A')
        }
        else if (rem == 11) {
            HexaNo.unshift('B')
        }
        else if (rem == 12) {
            HexaNo.unshift('C')
        }
        else if (rem == 13) {
            HexaNo.unshift('D')
        }
        else if (rem == 14) {
            HexaNo.unshift('E')
        }
        else if (rem == 15) {
            HexaNo.unshift('F')
        }
        baseTen = Math.floor(baseTen / 16)
    }
    return HexaNo.join("")
}

function HexaDecimalToDecimal(baseSixteen) {
    let numArr = baseSixteen.toString().split("")
    let power = 0
    let DecimalNo = 0
    for (let i = numArr.length - 1; i >= 0; i--) {
        let num = 0
        if (numArr[i] < 10) {
            num = numArr[i] * (16 ** power)
            DecimalNo += num
        }
        else if (numArr[i] == 'A') {
            num = 10 * (16 ** power)
            DecimalNo += num
        }
        else if (numArr[i] == 'B') {
            num = 11 * (16 ** power)
            DecimalNo += num
        }
        else if (numArr[i] == 'C') {
            num = 12 * (16 ** power)
            DecimalNo += num
        }
        else if (numArr[i] == 'D') {
            num = 13 * (16 ** power)
            DecimalNo += num
        }
        else if (numArr[i] == 'E') {
            num = 14 * (16 ** power)
            DecimalNo += num
        }
        else if (numArr[i] == 'F') {
            num = 15 * (16 ** power)
            DecimalNo += num
        }
        power++
    }
    return DecimalNo
}

function DecimalToOctal(baseTen) {
    let octalNo = []
    while (baseTen > 0) {
        let rem = baseTen % 8
        octalNo.unshift(rem)
        baseTen = Math.floor(baseTen / 8)
    }
    return parseInt(octalNo.join(""))
}

function OctalToDecimal(baseEight) {
    let decimalNo = 0
    let power = 0
    for (let v of baseEight.toString().split("").reverse()) {
        decimalNo += v * 8 ** power
        power++
    }
    return decimalNo
}

function BinaryToOctal(n) {
    return DecimalToOctal(BinaryToDecimalConverter(n))
}

function BinaryToHexaDecimal(n) {
    return DecimalToHexaDecimal(BinaryToDecimalConverter(n))
}

function OctalToHexaDecimal(n) {
    return DecimalToHexaDecimal(OctalToDecimal(n))
}

function OctalToBinary(n) {
    return DecimalToBinaryConverter(OctalToBinary(n))
}

function HexaDecimalToOctal(n) {
    return DecimalToOctal(HexaDecimalToDecimal(n))
}

function HexaDecimalToBinary(n) {
    return DecimalToBinaryConverter(HexaDecimalToDecimal(n))
}

function BaseNumberConverter(number, base, newbase) {
    if (base == newbase) {
        return number
    }
    else if (base == 2 && newbase == 10) {
        return BinaryToDecimalConverter(number)
    }
    else if (base == 2 && newbase == 8) {
        return BinaryToOctal(number)
    }
    else if (base == 2 && newbase == 16) {
        return BinaryToHexaDecimal(number)
    }
    else if (base == 8 && newbase == 10) {
        return OctalToDecimal(number)
    }
    else if (base == 8 && newbase == 2) {
        return OctalToBinary(number)
    }
    else if (base == 8 && newbase == 16) {
        return OctalToHexaDecimal(number)
    }
    else if (base == 16 && newbase == 10) {
        return HexaDecimalToDecimal(number)
    }
    else if (base == 16 && newbase == 8) {
        return HexaDecimalToOctal(number)
    }
    else if (base == 16 && newbase == 2) {
        return HexaDecimalToBinary(number)
    }
    else if (base == 10 && newbase == 2) {
        return DecimalToBinaryConverter(number)
    }
    else if (base == 10 && newbase == 16) {
        return DecimalToHexaDecimal(number)
    }
    else if (base == 10 && newbase == 8) {
        return DecimalToOctal(number)
    }
}

// console.log(BaseNumberConverter("AEBDE1", 16, 10))
// console.log(BaseNumberConverter(31, 10, 16))
console.log(DecimalToHexaDecimal(11451873))
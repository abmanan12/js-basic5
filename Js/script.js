let originalText = 25.12345
// ..............................................................................................................

function roundNumber() {
    document.getElementById('inputHere').value = ""
    let roundNum = Math.round(originalText)
    document.getElementById('output').innerHTML = roundNum
}

function ceilNumber() {
    document.getElementById('inputHere').value = ""
    let ceilNum = Math.ceil(originalText)
    document.getElementById('output').innerHTML = ceilNum
}

function floorNumber() {
    document.getElementById('inputHere').value = ""
    let floorNum = Math.floor(originalText)
    document.getElementById('output').innerHTML = floorNum
}

function generateNumber() {
    document.getElementById('inputHere').value = ""
    let randomNum = Math.random()
    document.getElementById('output').innerHTML = randomNum
}

function throwDice() {
    document.getElementById('inputHere').value = ""
    let throwNum = Math.random()
    let diceNum = throwNum * 6
    let diceFloor = Math.ceil(diceNum)
    document.getElementById('output').innerHTML = diceFloor
}

function generatePassword() {
    document.getElementById('inputHere').value = ""
    let length = +prompt("Please Enter Your Password Length")

    if (!length) {
        alert("Please Enter Your Password Length to Continue")
        return
    }

    let finalString = ""
    let capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '0123456789'
    let symbols = "`~!@#$%^&*-_=+/?.,"

    let combineLetters = capitalLetters + smallLetters + numbers + symbols

    for (let i = 0; i < length; i++) {
        let randomNums = Math.random()
        finalString += combineLetters.charAt(Math.floor(randomNums * combineLetters.length))
    }
    let html = finalString + '<br>' + '<span style = "color: green">' + 'Your Generating Strong Password length is ' + '</span>' + '<span style = "color: red">' + length + '</span>'
    document.getElementById('output').innerHTML = html
}

function convertingStrings() {
    let inputValue = document.getElementById("inputHere").value

    if (!inputValue) {
        alert("Please Enter Value")
        return
    }

    let inputValue1 = parseInt(inputValue)
    document.getElementById('output').innerHTML = inputValue1

    // let inputValue2 = Number(inputValue)
    // document.getElementById('output').innerHTML = inputValue2


    // let stringNum = 1000
    // console.log(stringNum)

    // let convertString = parseInt(stringNum)
    // console.log(typeof(convertString))
    // console.log(convertString)

}

function controllingLength() {
    let num = document.getElementById("inputHere").value
    // console.log(num)
    num = Number(num)
    // console.log(num)

    if (!num) {
        alert("Please Enter Value")
        return
    }

    // let num = 10.2334

    num = num.toFixed(1)
    document.getElementById('output').innerHTML = num
}


function calculateGST() {
    let rate = document.getElementById("inputHere").value
    rate = Number(rate)

    if (!rate) {
        alert("Please Enter Value")
        return
    }

    // let price = 900

    let gstTex = (17 * rate) / 100
    let finalPrice = rate + gstTex

    let html = '<span style = "color: green">' + 'Your Rate is: ' + '</span>' + rate + '<br>' + '<span style = "color: red">' + 'GST Tex is: ' + '</span>' + gstTex + '<br>' + '.........................................' + '<br>' + '<span style = "color: Blue">' + 'Final Price is: ' + '</span>' + finalPrice + '<br>' + '.........................................'
    document.getElementById('output').innerHTML = html

}


function clearbtn1() {
    document.getElementById("inputHere").value = ""
}


function clearOutput() {
    document.getElementById("output").innerHTML = " "
}
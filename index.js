// Your code here
function saturdayFun(param1 = 'roller-skate') {
    return `This Saturday, I want to ${param1}!`
        //console.log(`This Saturday, I want to ${param1}!"`)
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style = "*") {
    return function innerFunction(param1 = "special") {
        return `You are ${style}${param1}${style}!`
    }
}

const Calculator = {
    add: function(num1, num2) {
        return num1 + num2
    },

    subtract: function(num1, num2) {
        return num1 - num2
    },

    multiply: function(num1, num2) {
        return num1 * num2
    },

    divide: function(num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(start, arrayOfFunctions) {
    let result = start

    for (let i = 0; i < arrayOfFunctions.length; i++) {
        result = arrayOfFunctions[i](result)
    }

    return result
}
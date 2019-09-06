function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function (flair = "*") {
    return function (adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}

let Calculator = {
    add: function (num1, num2){
        return num1 + num2
    },
    subtract: function (num1, num2){
        return num1 - num2
    },
    multiply: function (num1, num2){
        return num1 * num2
    },
    divide: function (num1, num2){
        return num1 / num2
    }
}

let actionApplyer = function(int, arr){
    if(arr.length === 0) return int

    arr.forEach(fn => { int = fn(int) })
    return int

}
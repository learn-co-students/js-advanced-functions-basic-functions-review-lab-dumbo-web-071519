// Your code here
function saturdayFun(str="roller-skate"){
    return `This Saturday, I want to ${str}!`
}

function mondayWork(str='go to the office'){
   return `This Monday, I will ${str}.`
}

function wrapAdjective(flair="*"){
    return (param = "special") => {
        console.log(`You are ${flair}${param}${flair}`)
        return `You are ${flair}${param}${flair}!`
    }
}


const Calculator =  {}

Calculator.add = (a, b) => {
    return a + b
}
Calculator.subtract = (a, b) => {
    return a - b
}
Calculator.multiply = (a, b) => {
    return a * b
}
Calculator.divide = (a, b) => {
    return a / b
}

actionApplyer = (start, array) => {
    debugger
    if(array.length == 0){
        return 0
    }else{
        array.forEach(fn => { start = fn(start) })
        return start
        }
}

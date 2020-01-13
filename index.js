// Function Questions

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(task="go to the office") {
  return `This Monday, I will ${task}.`
}

function wrapAdjective(flair="*") {
  return function(adj="special") {
    return `You are ${flair}${adj}${flair}!`
  }
}

// Additional Questions
const Calculator = {}

Calculator.add = function(n1, n2) {
  return n1+n2
}

Calculator.subtract = function(n1, n2) {
  return n1-n2
}

Calculator.multiply = function(n1, n2) {
  return n1*n2
}

Calculator.divide = function(n1, n2) {
  return n1/n2
}

function actionApplyer(init, actions) {
  if (actions.length === 0) return init
  return actions.reduce(function(accumulator, currentAction) {
    return currentAction(accumulator)
  }, init)
}

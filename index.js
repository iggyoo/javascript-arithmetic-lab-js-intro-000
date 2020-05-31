function add() {
  1 + 80 // 81
}

function subtract() {
  60 - 40 // 20
}

function multiply() {
  2 * 3.4 // 6.8 (there's that floating-point arithmetic again...)
}

function divide() {
  5.0 / 2.5 // 2
}

var number = 10
 
function add5() {
  number += 5
}
 
function divideBy3() {
  number /= 3
}
 
divideBy3()
 
console.log(number) // 3.333333333335
 
add5()
 
console.log(number) // 8.333333333335
 
// reset number
number = 10
 
add5()
 
console.log(number) // 15
 
divideBy3()
 
console.log(number) // 5

function makeInt(string) {
parseInt('string')
}

function preserveDecimal(string) {
parseFloat ('string')
}

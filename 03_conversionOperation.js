let score = "33abc"
let age = null

console.log(typeof score)
console.log(typeof (score))

let ageInNumber = Number(age)
console.log(typeof ageInNumber)
console.log(ageInNumber)

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=> 33 
// "33abc" => NaN   
// true => 1 , false => 0 
// null => 0  null will give us 0

let isLoggedIn = "jamal"

let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0=> false
// "" => false 
// "jamal"=> true 

let someNumber = 10

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

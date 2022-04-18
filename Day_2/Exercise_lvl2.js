//Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('There is no exercise better for the heart than reaching down and lifting people up.')
//Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ten = '10'

console.log(typeof ten == 10) // false

let tenV1 = '10'
console.log(typeof tenV1 == ten)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = '9.8'
console.log(Math.round(parseFloat(num)) ==10)

//Check if 'on' is found in both python and jargon
let check = "python and jargon"
console.log(check.includes('on')) //true

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let check2 = 'I hope this course is not full of jargon.'
console.log(check2.includes('Jargon')) //False

//Generate a random number between 0 and 100 inclusively.
const randNum = Math.random()
console.log(Math.floor(randNum * 100))
//Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(randNum * 50) + 50)
//Generate a random number between 0 and 255 inclusively.

const readLine = require('readline-sync')

let sandwich = readLine.question(`Hello, what sandwich would you like to start with *Chicken $5.25, beef $6.25, or tofu $5.75*  :`)
console.log(`Alright a ${sandwich} sandwich`);
let answer = readLine.question(`Would you like a beverage with that  :`)

while (answer != "Yes" && answer !="No") {
    if (answer = "Yes") {
        let beverage = readLine.question("What size would you like it in  :")
    }
    if (answer = "No") {
        readLine.question("Okay!")
    }
}
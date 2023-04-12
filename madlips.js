const readLine = require ('readline-sync');

let question = [' '];
let values = [1, 2, 3, 4,];

let question1 = readLine.question("Enter a noun/ place: ")
let question2 = readLine.question("Enter a noun/ food: ")
let question3 = readLine.question("Enter a noun/food: ")
let question4 = readLine.question("Enter a noun/beverage: ")
let question5 = readLine.question("Enter a verb: ")
let question6 = readLine.question("Enter a noun/animal: ")
let question7 = readLine.question("Enter a noun/food: ")
let question8 = readLine.question("Enter a verb: ")
let question9 = readLine.question("Enter a body part/noun: ")
let question10 = readLine.question("Enter a noun/liquid: ")
let question11 = readLine.question("Enter a social platform/noun: ")
let question12 = readLine.question("Enter a number 1-100: ")
let question13 = readLine.question("Enter a verb: ")
let question14 = readLine.question("Enter a noun: ")
let question15 = readLine.question("Enter a noun: ")
let question16 = readLine.question("Enter a noun/place: ")
let question17 = readLine.question("Enter a verb: ")
let question18 = readLine.question("Enter a noun: ")
let question19 = readLine.question("Enter a adjective: ")
let question20 = readLine.question("Enter a verb: ")

question.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,
    question11, question12, question13, question14, question15, question16, question17, question18, question19, question20);
console.log(`You wake up in ${question[1]} and decide to make ${question[2]}, with a side of ${question[3]} and ${question[4]},
 thinking on how to start your morning before ${question[5]}. You then feed your ${question[6]},
  ${question[7]} although it finds it disgusting and then ${question[8]} it’s bowl onto your ${question[9]}. 
  Seeing all of the mess on you, you decide to clean it with ${question[10]}. You check on ${question[11]} and have ${question[12]} more followers than you did! 
  This motivation makes you want to ${question[13]} on your ${question[14]}. You change into your ${question[15]} themed shirt, and decide to go to ${question[16]}for the rest of the day. You go out of your room to ${question[17]},
   and you find a ${question[18]} that you liked.  You then go up to it and decide that you actually found it ${question[19]}.  After the day ends you, again go ${question[20]} for the last time of the day.`);
'use strict'

let userResponse1 = prompt("Are you a male?")
let userResponse1low = userResponse1.toLocaleLowerCase();

let userResponse2 = prompt("Are you from the USA?")
let userResponse2low = userResponse2.toLocaleLowerCase();
 
let userResponse3 = prompt("Do you have work experience as a programmer?")
let userResponse3low = userResponse3.toLocaleLowerCase();

let userResponse4 = prompt("Would you consider yourself an introvert?")
let userResponse4low = userResponse4.toLocaleLowerCase();

let userResponse5 = prompt("Do you like pizza?")
let userResponse5low = userResponse5.toLocaleLowerCase();

console.log("user response to prompt 1 was " + userResponse1 + 
". user response to prompt 2 was " + userResponse2 + 
". user response to prompt 3 was " + userResponse3 + 
". user response to prompt 4 was " + userResponse4 + 
". user response to prompt 5 was " + userResponse5 + ".")

alert("Thank you for answering this short questionaire, you responded " + (userResponse1low)
    + " to question 1. You responded " + (userResponse2low)
    + " to question 2. You responded " + (userResponse3low)
    + " to question 3. You responded " + (userResponse4low)
    + " to question 4 and you responded " + (userResponse5low)
    + " to question 5.")

let ageResponse = prompt("Please try to guess my age.")

let age = parseInt(ageResponse)

if (age === 29) {
    alert("Well done!")
    console.log("Well done!")
  } else {
    alert("Sorry, that is wildly incorrect")
    console.log("Sorry, that is wildly incorrect")
  }

  let username = prompt("What may I call you?")
  alert("Welcome " + username + ", this is my lab2 site for Code Fellows 201.")
  console.log("User response to username was " + username)
  alert("Now, " + username + ", here is a bit about myself.")
'use strict';

function questions1thru5(){
  let userResponse1 = prompt("Are you a male?")
  let userResponse1low = userResponse1.toLocaleLowerCase()

  let userResponse2 = prompt("Are you from the USA?")
  let userResponse2low = userResponse2.toLocaleLowerCase()
  
  let userResponse3 = prompt("Do you have work experience as a programmer?")
  let userResponse3low = userResponse3.toLocaleLowerCase()

  let userResponse4 = prompt("Would you consider yourself an introvert?")
  let userResponse4low = userResponse4.toLocaleLowerCase()

  let userResponse5 = prompt("Do you like pizza?")
  let userResponse5low = userResponse5.toLocaleLowerCase()

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
}
questions1thru5();


function question6(){
  let guessingGameYesOrNo = prompt('Would you like to guess my age?')

  if (guessingGameYesOrNo.toLowerCase() == 'yes'){
    function question6() {
      let correctAnswer = 29;
      let userNum = prompt('Between 1-100, how old do you think I am?')
      let userGuess = parseInt(userNum)

  

    for(let i = 3; i > 0; i--) {
      if(userGuess < correctAnswer){
          userGuess = prompt(i + ' Guesses left. To Low. Please enter a number 1-100')
      } if (userGuess > correctAnswer) {
          userGuess = prompt(i + ' Guesses left. To High! Please enter a number 1-100')
      } else {
        alert('You are correct')
      }
    }
    if(userGuess != correctAnswer)
      alert('Sorry you are incorrect, the answer was 29')
  } 
}
}
question6();



function question7() {
  let favFruit = ['peaches','passionfruit'];
  let maxAttempts = 6;
  let correctA = false;
  if (response === null){
    return;
  }

  for (let count = 1; count <= maxAttempts; count+=1) {

    let response = prompt('What are one of my favorite fruits?');

    for (let i = 0; i < favFruit.length; i +=1) {
      let fav = favFruit[i, i+1];
      if (fav === response) {
        alert('Congrats, that is correct!');
        correctA = true;
        break;
      } else if (fav != response) {
        alert('Sorry, that is incorrect');
        break;
      }
    }
    if (correctA) {
      break;
    }
  }

  alert('My favorites fruits are ' + favFruit);
}
question7();



let username = prompt("What may I call you?")
alert("Welcome " + username + ", this is my lab2 site for Code Fellows 201.")
console.log("User response to username was " + username)
alert("Now, " + username + ", here is a bit about myself.")
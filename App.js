import myQuestions from "./Questions.js"
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const Percent = document.getElementById('Percent');
const submitButton = document.getElementById('submit');
// const passcode = document.getElementById('passcode');

const userwelcome = document.querySelector('.userwelcome')

const userdata = JSON.parse(localStorage.getItem('EflexQuizUserInfo'))

userwelcome.innerHTML = "Welcome " + userdata

console.log(myQuestions)

// (function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
        let letter; 
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }

  //   let number = ["1234344335", "42354356465", "645465665865", "6453547467456"]
  //  let num = Math.floor(Math.random() * number.length)
  //  console.log(number[num])
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          // answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          // answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
    //   resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      if(numCorrect > 2){
        let SubOk = document.querySelector(".SubOk")
        SubOk.style.display = "flex"
        document.getElementById("Information").innerHTML = "Congratulation! 🎉🎉✨✨😎🥰" + userdata
        resultsContainer.innerHTML = `you scored ${numCorrect} out of ${myQuestions.length}`;
        // passcode.innerHTML = `Your Passcode is ${number[num]}`
      }else{
        let SubRetry = document.querySelector(".SubRetry")
        SubRetry.style.display = "flex"
        document.getElementById("Information").innerHTML = "Almost There 🤯🤯🥺 " + userdata
        resultsContainer.innerHTML = `you scored ${numCorrect} out of ${myQuestions.length}`;
      }

      if(numCorrect == 10){
        Percent.innerHTML = "Your percentage is 100%"
      }else if(numCorrect == 5){
        Percent.innerHTML = "Your percentage is 50%"
      }else if(numCorrect == 3){
        Percent.innerHTML = "Your percentage is 20%"
      }else{
        Percent.innerHTML = "Your percentage is 0%"
      }

      let Pop = document.querySelector(".Pop")
      Pop.style.display = "flex"
    }


    let SubOk = document.querySelector(".SubOk")
    SubOk.onclick = ()=>{
        let Pop = document.querySelector(".Pop")
        Pop.style.display = "none"
        window.location = "index.html"
    }

    let SubRetry = document.querySelector(".SubRetry")
    SubRetry.onclick = ()=>{
        let Pop = document.querySelector(".Pop")
        Pop.style.display = "none"
        window.location.reload()
    }

  

  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  // })();


  // const myTimeout = setTimeout(myGreeting, 5000);
  // function myGreeting() {
  // alert("Welcome")
  // }

  // let countDownDate = new Date("Jan 19, 2023 12:40:25").getTime();
  let countDownDate = Date.now() + 10 * 60 * 1000

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "Timer " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    let Pop = document.querySelector(".Pop")
    Pop.style.display = "flex"
    document.getElementById("Information").innerHTML = "Almost There 🤯🤯🥺 b"
    let SubRetry = document.querySelector(".SubRetry")
    SubRetry.style.display = "flex"
    SubRetry.onclick = ()=>{
        let Pop = document.querySelector(".Pop")
        Pop.style.display = "none"
        window.location.reload()
    }

      // resultsContainer.innerHTML = `you scored ${numCorrect} out of ${myQuestions.length}`;
    // document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


  
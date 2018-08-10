// //Zach's Code using prompt;
// let captchaArray = ['Who is the President?', 'What is our Nations Capital?', 'How many States are there?'];

// function captchaFunction() {
//     let correctAnswer = ['Trump', 'DC', '50'];
//     for(let i = 0; i<captchaArray.length; i++) {
//         let result = prompt(captchaArray[i]);
//         if(correctAnswer[i] !== result) {
//             alert('Sorry Robot');
//             return;
//         }
//     }
//     alert('Hello Human');
// }

// captchaFunction();

//My goal: Instead of using prompt, I want learn to do the above with html form.

//1: create a loop that display each question one at a time.
//2: replace with next question when the enters answer and hits the submit button.
//3: create that user anser to set answer/ correct answer.

let testContainer = document.getElementById('question');
let resultContainer = document.getElementById('result');
let submitButton = document.getElementById('submit-button');

//the functions

//function that hold the questions, answers options and correct answer.
 function testFunc() {};

 // function that display the result/ user input
function displayResult() {};

//Display result when user click this button.
submitButton.addEventListener('click', displayResult);

let testQuestions = [
    {
        question: 'Who is the president?',

        ans: {
            a: 'Bush',
            b: 'Trump',
            c: 'Obama'
        },

        correctAnswer: 'b'
    },

    {
        question: 'What city we are in?',

        answers: {
            a: 'Gaithersburg',
            b: 'Rockville',
            c: 'Bethesda'
        },

        correctAnswer: 'c'
    }
   
];

function testFunc() {

    //will need a place to store html output
    let output = [];

    //for each question
    testQuestions.forEach(

        (currentQuestion, questionNumber) => {

            //will need to store answers
            let answers = [];

            //and for each avialable answer...
            for(letter in currentQuestion.answers) {

                //...add an html radio button
                answers.push(

                    <label>

                        <input type="radio" name="question${questionNumber}" value="${letter}"/>

                        ${letter} :

                        ${currentQuestion.answers[letter]}

                    </label>
                );
            }

            //add this questiona and it's output
            output.push(

                <div class="question">${currentQuestion.question}</div>
                <div class="answers">${answers.join('')}</div>
            );

        }
    )

    // Combine input list in one string of html and put thme in the page.
    testContainer.innerHTML = output.join('');
};

//Test Function ends

/*=======================================
    //Displaying Results
=========================================*/
//The Function
function displayResult() {
    
    //Gaither answers container from our quiz.
    //We use the querySelectorAll() method (uses a css selector to select all matching element) pg 188,193, 197, 202 Text book
    //we are using css class .answer in line 101 to select every matching elements/answers with that class.

    let answerContainers = testContainer.querySelectorAll('.answers');

    //track user's answers
    numCorrect = 0; // set to zero

    //for each question...
    testQuestions.forEach( (currentQuestion, questionNumber) => {

        //find selected answer
        let answerContainer = answerContainers[questionNumber];

        let selector = 'input[name=question' + questionNumber + ']:checked';

        let userAnswer = (answerContainer.querySelector(selector) || {}).value;

    })
}

//Still working on it.

//cite
//JavaScript & Juery by Jon Duckett 
//https://www.sitepoint.com/simple-javascript-quiz/

$(document).ready(function() {
    //quiz questions
    var theQuestions = [{
        question: "What is the tallest mountain in Oregon?",
        choices: ["Mount Hood", "Mount Baker", "Mount Jefferson", "North Sister", "Mount Rainier"],
        qNum : 0,
        correct : 0,
        },
        {
        question: "The Pacific Northwest is home to the deepest lake in the USA. Which lake is it?",
        choices: ["Crater Lake (Oregon)", "Lake Chelan (Washington)", "Waldo Lake (Oregon)", "Lake Crescent (Washington)", "Adams Lake (British Columbia)"],
        qNum : 1,
        correct : 0,
        },
        {
        question: "What is the state tree of Oregon?",
        choices: ["Red Cedar", "Ponderosa Pine", "Douglas Fir", "Oregon White Oak", "Pacific Madrone"],
        qNum : 2,
        correct : 2,
        },
        {
        question: "What is the tallest mountain in the Cascades?",
        choices: ["Mount Saint Helens", "Mount Jefferson", "Mount Rainier", "Mount Shasta", "Mount Mitchell"],
        qNum : 3,
        correct : 2,
        },
        {
        question: "What is the original (ie: Native American) name of Mount Saint Helens?",
        choices: ["Lakota", "Wy'East", "Denali", "Pahtoe", "Loowit"],
        qNum : 4,
        correct : 4,
    }];

//global variables
    var currentQuestion = 0;

function newQuestion(questionArray){
    var e = $('.question');
    var question = e.find('.aQuestion');
    question.html(questionArray[currentQuestion].question);

    var answers = e.find('.theChoices');
    answers.empty();
    for(var i = 0; i < questionArray[currentQuestion].choices.length; i++){ 
        var c = questionArray[currentQuestion].choices[i];
        answers.append('<span class="choice">' + c + '</span>')
     }
    $('#questionNumber').html(currentQuestion + 1)
}

$('.nextButton').click(function(){
    currentQuestion = currentQuestion + 1;
    newQuestion(theQuestions);
    })

newQuestion(theQuestions);

});


//answer selected >> 
    // if theQuestions.correct chosen >> add .correctChoice
    // else >> add .wrongchoice

// keep track of number of correct answers
    // create variable? each correct answer >> +1?
    // if currentQuestion + 1 > 5 >> display results
    // hide div.questions?
    // do i need to build a new div w/ the design/HTML for the last page?
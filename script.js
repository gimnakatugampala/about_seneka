const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');
const loader = document.getElementById('loader');
const container = document.getElementById('container');
const domScore = document.getElementById('dom-score');
const hud = document.getElementById('hud-item');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded',() =>{
    setTimeout(() =>{
        loader.classList.add('hide');
        container.classList.remove('hide')
    },2000)
})

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
    
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish & Restart';
            domScore.innerText = `Your Score : ${scoretext}`;
            startButton.onclick = function(){
                setTimeout(() =>{
                    loader.classList.remove('hide')
                    container.classList.add('hide');
                    hud.classList.add('hide');
                },1)
                window.location.reload();
                    domScore.innerText = ''
            }
            startButton.classList.remove('hide')
            
            // setTimeout(() =>{
            //     window.location.reload();
            //     domScore.innerText = ''
            // },3000)
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"Where does she hope to be in 10 years?",
        answers:[
            {text:'An Arts Teacher',correct:false},
            {text:'An English Teacher',correct:true},
            {text:'A Doctor',correct:false},
            {text:'Overseas',correct:false}
        ]
    },
    {
        questions:"Best gift she ever recieved?",
        answers:[
            {text:'A Laptop',correct:false},
            {text:'Her parents',correct:true},
            {text:'An Iphone',correct:false},
            {text:'A Great Education',correct:false},
        ]
    },
    {
        questions:"Her dream job?",
        answers:[
            {text:'A Politician',correct:false},
            {text:'A Social Worker',correct:false},
            {text:'A Businesswomen',correct:false},
            {text:'An English Teacher',correct:true}
        ]
    },
    {
        questions:"Her current job?",
        answers:[
            {text:'Reading Books(Facebook)',correct:false},
            {text:'Watching anime Films',correct:true},
            {text:'Watching Netflix',correct:false},
            {text:'Teaching',correct:false}
        ]
    },
    {
        questions:"3 words to describe her?",
        answers:[
            {text:'Dedicated,lazy,kind',correct:false},
            {text:'ambivert,lazy,focused',correct:false},
            {text:'extrovert,funny,kind',correct:false},
            {text:'Introvert,helpful,lazy',correct:true}
        ]
    },
    {
        questions:"If she had a superpower what would it be?",
        answers:[
            {text:'Bend all elements',correct:true},
            {text:'Super Speed',correct:false},
            {text:'Super Senses',correct:false},
            {text:'Invisibility',correct:false}
        ]
    },
    {
        questions:"A schoolmate she lookup to?",
        answers:[
            {text:'Bryan',correct:false},
            {text:'Herself',correct:true},
            {text:'Afra',correct:false},
            {text:'Akash',correct:false}
        ]
    },
    {
        questions:"A schoolmate that advice her?",
        answers:[
            {text:'Saduni',correct:false},
            {text:'Aadhya',correct:false},
            {text:'Azeeza',correct:false},
            {text:'Afra',correct:true}
        ]
    },
    {
        questions:"A schoolmate that makes her laugh?",
        answers:[
            {text:'Everyone',correct:true},
            {text:'No one',correct:false},
            {text:'Roshan',correct:false},
            {text:'Sahassrika',correct:false}
        ]
    },
    {
        questions:"A schoolmate that inspire her?",
        answers:[
            {text:'Afra',correct:false},
            {text:'Aadhya',correct:false},
            {text:'Sanduni',correct:false},
            {text:'No One',correct:true},
        ]
    },
    {
        questions:"Best advice she ever recieved?",
        answers:[
            {text:'Can’t choose(Many)',correct:true},
            {text:'Be Kind',correct:false},
            {text:'Your word is your bond',correct:false},
            {text:'Work hard',correct:false}
        ]
    },
    {
        questions:"An industry she is passinate about?",
        answers:[
            {text:'Finance',correct:false},
            {text:'Film',correct:false},
            {text:'Cooking',correct:true},
            {text:'Car',correct:false}
        ]
    },
    {
        questions:"A moment that changed her life?",
        answers:[
            {text:'Education is the way out',correct:false},
            {text:'Nothing is forever',correct:false},
            {text:'Life is short',correct:false},
            {text:'The moment she understood the truth about a certain person.',correct:true}
        ]
    },
    {
        questions:"Her proudest momet?",
        answers:[
            {text:'Paid her home expenses',correct:false},
            {text:'Did her first Job',correct:true},
            {text:'A Laptop',correct:false},
            {text:'Go good Grades in Exams',correct:false}
        ]
    },
    {
        questions:"Best mentor(s) she ever recieved?",
        answers:[
            {text:'Her teachers',correct:false},
            {text:'Her Friends',correct:false},
            {text:'Her Mom',correct:true},
            {text:'Her Dad',correct:false}
        ]
    },
    {
        questions:"A person / people she can't live without ?",
        answers:[
            {text:'Her Mom',correct:true},
            {text:'Her Dad',correct:false},
            {text:'Her Friends',correct:false},
            {text:'A Life',correct:false}
        ]
    },
    {
        questions:"A bad habbit she still has?",
        answers:[
            {text:'Blaming other',correct:false},
            {text:'Nose picking',correct:false},
            {text:'Oversleeping',correct:true},
            {text:'Trying to control everything',correct:false}
        ]
    },
    {
        questions:"A good habbit she has?",
        answers:[
            {text:'Eat Healthy Food',correct:false},
            {text:'Nothing',correct:true},
            {text:'Brushing Twice a Day',correct:false},
            {text:'Be Responsible With Money',correct:false}
        ]
    },
    {
        questions:"One thing that she has that others don't have?",
        answers:[
            {text:'Ability to public speak',correct:true},
            {text:'Her Discipline',correct:false},
            {text:'Ability to make friends',correct:false},
            {text:'Her ability to  learn fast',correct:false}
        ]
    },
    {
        questions:"One thing she regrets by far?",
        answers:[
            {text:'Waking up early',correct:false},
            {text:'Overthinking',correct:false},
            {text:'Being friends with someone whom she shouldn’t has.',correct:true},
            {text:'Being attentive in School',correct:false}
        ]
    },
]
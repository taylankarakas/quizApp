const url = new URLSearchParams(window.location.search);
const dataLocal = JSON.parse(localStorage.getItem('quiz')) || [];
let interval;

console.log(dataLocal);

let quiz;

for (const [key, value] of url) {

    // value = string and convert to Int.
    let val = parseInt(value);

    // return the object.
    quiz  = dataLocal.find(e => val === e.id);
    quiz.questions.forEach((q, i) => {
        console.log(q.answers);
    
        let htmlUI = `<div class="item clearfix" id="income-0">
                <div class="item__description">${ q.title }</div>
                <div data-question-id="${ q.id }" class="right clearfix">
                    <input type="radio" class="question" name="ques-${ i }" value="A">${ q.answers[0].A }
                    <input type="radio" class="question" name="ques-${ i }" value="B">${ q.answers[0].B }
                    <input type="radio" class="question" name="ques-${ i }" value="C">${ q.answers[0].C }
                    <input type="radio" class="question" name="ques-${ i }" value="D">${ q.answers[0].D }
                </div>
            </div>`; 

            document.querySelector('.income__list').insertAdjacentHTML('beforeend', htmlUI);
    });
};

const questCounter = document.getElementsByClassName('item');
const timeLine = ( questCounter.length * 2 ) ;
console.log(timeLine);


    let time = document.getElementById('time');
    let start = document.getElementById('start');
    let seconds = 10;
    let minutes = 0;
    let hours = 0;

    
function counter () {

    seconds--;
    if (seconds === 0) {
        console.log('seconds->', seconds);
        if(minutes > 0) {
            console.log('minutes->', minutes);
            minutes--;
            seconds = 10;
        }
        else if (minutes === 0) {
            if(hours > 0) {
                console.log('hours->', hours);
                hours--;
                minutes = 59;
                seconds = 10;
            }
        }
    }
    
    if(minutes === 0 && seconds === 0 && hours === 0) {
        stopTimer();
        formSubmit();
        disabled();

        alert('süre doldu');
    }

    time.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + 
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
    (seconds > 9 ? seconds : "0" + seconds);

}

function timer () {
    interval = setInterval(counter, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

//start Timer();
start.onclick = () => {
    timer()
    undisable()
}


// form submit button click event
document.querySelector('.form-submit').addEventListener('click',formSubmit);


// form data push to localStorage
function formSubmit () {

        const val = document.querySelectorAll('.item');
        console.log('length', val.length);
            
        quiz.answers = [];

        console.log('val', val);
        console.log(document.querySelector('.item').length);

        // empty qustion settings.
        val.forEach((el, i) => {

            const  questionNodes = document.querySelectorAll(`[name="ques-${i}"]`);
            const questionId = questionNodes[0].parentElement.getAttribute('data-question-id');
            const a = Array.from(questionNodes).filter(e => e.checked);
            console.log('checked', a);
                    
                    
                quiz.answers.push(
                    {
                        questionId,
                        answer :  a.length >0 ?  a[0].value : ''
                    }
                )
                 
        });
    
        console.log(quiz.answers);
        console.log(quiz);

        
        const quizIndex = dataLocal.findIndex(e => quiz.id === e.id);
        
        dataLocal[quizIndex] = quiz;
        localStorage.setItem('quiz', JSON.stringify(dataLocal));

        stopTimer();
        disabled();
        
}
disabled();
function disabled () {  

    // inputs put the disable attribute.
    const a = document.getElementsByTagName('input');
    for (let x = 0; x < a.length; x++) {
        const disabled = document.createAttribute('disabled');
        disabled.value = 'disabled';
        a[x].setAttributeNode(disabled);
    }

}

function undisable() {
    const a = document.getElementsByTagName('input');
    for (let x = 0; x < a.length; x++) {
        a[x].removeAttribute('disabled');
        
    }
}


document.getElementById('answers-btn').addEventListener('click', () => {
    window.location.href = 'answers.html?id=' + url.get('id');
});







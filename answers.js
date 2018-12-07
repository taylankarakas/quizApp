const urlAns = new URLSearchParams(window.location.search);
const ls = JSON.parse(localStorage.getItem('quiz')) || [];

let key, value, quiz;

for ([key, value] of urlAns) {
    let val = parseInt(value);
    
    // quiz object.
    quiz = ls.find(e => val === e.id )
}

let trueCounter = 0, falseCounter = 0, emptyCounter = 0;

quiz.questions.forEach((e, i) => {

    let answ, answer, question, html;

    // answers objects
    answ = quiz.answers.find(i => e.id == i.questionId);

    // answer
    answer = answ.answer;
    console.log(answ.answer);
    
    // question
    question = e.title;

    // right answer
    const rightAnswer =  e.answers.find(e => e.trueAnswer);
    
    // create the html
    html = `<li >${ question } ==>  ${ answer } <a href="#"> Right Answer : ${ rightAnswer.trueAnswer } </a></li>`

    if (rightAnswer.trueAnswer === answer) {
        trueCounter++;
        document.getElementById('trueCounter').innerText = trueCounter;

    } else if (answer ==='') {
        emptyCounter++;
        document.getElementById('emptyCounter').innerText = emptyCounter;

    } else {
        falseCounter++;
        document.getElementById('falseCounter').innerText = falseCounter;
    }

    document.getElementById('answers-container').insertAdjacentHTML('beforeend', html);

});
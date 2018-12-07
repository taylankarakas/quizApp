// get the data from localStorage
const dataLocal = JSON.parse(localStorage.getItem('quiz')) || [];

for (let e = 0; e < dataLocal.length; e++) {
    let quizList = `${ e + 1 }<li data-id="${dataLocal[e].id}" class="quiz-item" >${ dataLocal[e].name }</li>`;

    document.querySelector('.quiz-list-ul').insertAdjacentHTML('beforeend', quizList);

}

const item = document.querySelectorAll('.quiz-item');
const items = Array.from(item);

items.forEach(e => {
    e.addEventListener('click', (event) => {
        let quizId = event.target.getAttribute('data-id');

        const quizControl = dataLocal.find(q => q.id == quizId);
        quizControl.answers ? window.location.href = 'answers.html?id=' + quizId : window.location.href = 'start.html?id=' + quizId;
        
    });
});


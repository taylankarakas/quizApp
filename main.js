
function randomId() {
    return Math.round( Math.random() * 10000 );
}

function init() {

    const DOM = {
        quizTitle : '.quiz-title',
        answer : '.add__value',
        submitBtn : '.add__btn__submit',
        clearBtn : '.add__btn'
    }

    document.addEventListener('keypress',(e) => {
        if (e.keyCode === 13) {
            const index = document.getElementsByClassName('question-input-item').length;
            addInput(index);
        }
        
    });

    function addInput (i) {
        let inputHtml = `
           <div class="question-input-item" style= "margin-top : 10px;">
               <input type="text" class="add__description" name="question[${i}]" required placeholder="Add question">
               <button class="add__btn"><i class="ion-ios-close"></i></button>
               <br />
               A: <input type="text" class="add__value" name="answer[${i}]" placeholder="Answer">
               <br />
               B: <input type="text" class="add__value" name="answer[${i}]" placeholder="Answer">
               <br />
               C: <input type="text" class="add__value" name="answer[${i}]" placeholder="Answer">
               <br />
               D: <input type="text" class="add__value" name="answer[${i}]" placeholder="Answer">
               <br />
               <select id="true-answer${ i }">
                <option value="">Doğru Şık</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
             </select>

           </div>`;

   
       const a = document.querySelector('.question-content').insertAdjacentHTML('beforeend', inputHtml);
   }

    let quizStore = JSON.parse(localStorage.getItem('quiz')) || [];
    
    // storage'e kaydet
    document.querySelector(DOM.submitBtn).addEventListener('click', () => {


        let questionCount = document.getElementsByClassName('question-input-item').length;
        
        // quiz title
        const name = document.querySelector(DOM.quizTitle).value;

        
        let id = randomId();

        const newQuiz = { id, name, questions: [] }; 

        console.log(newQuiz);
        

        if (quizStore.findIndex(e => e.name === name) !== -1 ) { // true dönerse if e girecek.
            alert('Bu isimle daha önce quiz oluşturuldu.');
            return;   
        }
            

        for (let i = 0; i < questionCount; i++) {
            let quesInp = document.getElementsByName(`question[${i}]`);
            let answInp = document.getElementsByName(`answer[${i}]`);
            const arrAnswInp = Array.from(answInp);

            // get the select box value.
            let selectBox = document.getElementById(`true-answer${ i }`);
            let value = selectBox.options[selectBox.selectedIndex].value;

            console.log(arrAnswInp);

            newQuiz.questions.push({
                id : randomId(),
                title : quesInp.item(0).value,
                answers: [
                    {
                        A : arrAnswInp[0].value,
                        B : arrAnswInp[1].value,
                        C : arrAnswInp[2].value,
                        D : arrAnswInp[3].value,
                        trueAnswer : value
                    }
                ]
            });
        }


        quizStore.push(newQuiz);

        localStorage.setItem('quiz', JSON.stringify(quizStore));

        // clear Input
        const clearInp =  document.getElementsByTagName('input')
        const arrClearInp = Array.from(clearInp);
        arrClearInp.forEach(e => e.value = '');

     });

     return quizStore;
    
}
init();







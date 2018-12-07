// class Question {
//     constructor (id, question, answer) {
//         this.id = id;
//         this.question = question;
//         this.answer = answer;
//     }
// }



// function createObj () {

//     // get the DOM
//     const DOM = {
//         question : '.add__description',
//         answer : '.add__value',
//         submitBtn : '.add__btn'
//     }

//     // get the datas
//     document.querySelector(DOM.submitBtn).addEventListener('click', start);
//     document.addEventListener('keydown', e => {
//         if (e.keyCode === 13 || e.which === 13) {
//             start();
//         }
//     });


//     // create item
//     function start () {
//         let ID;

//         if (localStorage.length === 0) {
//             ID = 1;
//         }

//         const ques = document.querySelector(DOM.question).value;
//         const answ = document.querySelector(DOM.answer).value;   

//         if (ques !== '' || answ !== '') {

//             // local storage
//             localStorage.setItem('soru-' + ID, ques);
//             localStorage.setItem('cevap-' + ID, answ);

//             console.log(ID);
//             console.log(ID, localStorage.getItem('soru-' + ID));
//             console.log(ID, localStorage.getItem('cevap-' + ID));
            

//             // create the question obje
//             let obj1 = new Question(ID,localStorage.getItem('soru-' + ID), localStorage.getItem('cevap-' + ID));
//             console.log(obj1);
            
            

//         } else {
//             alert('Boş Alan Bırakmayın');
//         }
        

//     }


    


// }
// createObj();




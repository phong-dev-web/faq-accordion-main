const questions = document.querySelectorAll('.questions-p');
const questionsBtn = document.querySelectorAll('.btn');
const answers = document.querySelectorAll('.answer');
const answersDecoration = document.querySelectorAll('.answer-decoration');

questions.forEach((question, length) => {
    question.addEventListener('click', () => {
        answers.forEach((answer, index) => { 
            if(length === index){ 
                answer.style.display = 'block';
                answersDecoration[index].style.display = 'block';

            } else {
                answer.style.display = 'none';
                answersDecoration[index].style.display = 'none';
            }
        });
    });
});

questionsBtn.forEach((btn, length) => {
    btn.addEventListener('click', () => {
        answers.forEach((answer, index) => { 
            if(length === index){ 
                answer.style.display = 'block';
                answersDecoration[index].style.display = 'block';
            } else {
                answer.style.display = 'none';
                answersDecoration[index].style.display = 'none';
            }
        });
    });
});
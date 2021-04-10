let gender = localStorage.getItem("gender");
if (gender === null || gender === undefined) {
    window.location.href = 'index.html';
}

let answers = localStorage.getItem("answers");

if (!answers) {
    let questionId = 1;
    localStorage.setItem('questionId', questionId);

    changeQuestion(questionId);
}

let grade = 0;
$(document).on('input', '#slider', function() {
    grade = $(this).val();
    grade = grade > 0 ? Math.ceil(grade) : Math.floor(grade);
    localStorage.setItem('grade', grade);
    $('.grade').removeClass('active');
    $('.grade' + grade).addClass('active');
});


$('.next-question').click(function () {
    let answers = localStorage.getItem('answers');
    let questionId = localStorage.getItem('questionId');

    answers = JSON.parse(answers);
    answers[questionId] = localStorage.getItem('grade');
    questionId++;
    localStorage.setItem('grade', 0);
    localStorage.setItem('answers', JSON.stringify(answers));
    localStorage.setItem('questionId', questionId);
    changeQuestion(questionId)
});




function changeQuestion(questionId) {
    $('.first-question').text(questionsArray[questionId].firstQuestion);
    $('.second-question').text(questionsArray[questionId].secondQuestion);
}
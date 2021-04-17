let gender = localStorage.getItem("gender");
let questionId = parseInt(localStorage.getItem('questionId'));
let answers = localStorage.getItem("answers");
let grade = 0;

if (gender === null || gender === undefined) {
    window.location.href = 'index.html';
}

if (!answers) {
    if (questionsObject.length) {
        alert('No questions found');
        window.location.href = 'index.html';
    }
    answers = {};
    questionId = 1;
}

localStorage.setItem('questionId', questionId);
changeQuestion(localStorage.getItem('questionId'));

if (parseInt(localStorage.getItem('questionId')) === questionsCount) {
    $('.next-question').text('Получить результат');
}

$(document).on('input', '#slider', function() {
    changeGrade($(this).val());
});


$('.next-question').click(function () {
    changeAnswers();
    if (questionId === questionsCount - 1) {
        $('.next-question').text('Получить результат');
    }
    if (questionId === questionsCount) {
        localStorage.setItem('resultAnswers', JSON.stringify(answers));
        localStorage.removeItem('answers');
        window.location.href = 'result.html';
        return;
    }
    if (questionId >= 1) {
        $('.prev-question').attr("disabled", false);
    }
    questionId++;
    changeQuestion(questionId);
});

$('.prev-question').click(function () {
    changeAnswers();
    if (questionId === questionsCount) {
        $('.next-question').text('Следующий вопрос');
    }
    if (questionId === 1) {
        $('.prev-question').attr("disabled", true);
        return;
    }

    questionId--;
    changeQuestion(questionId);
});


function changeAnswers() {
    answers = localStorage.getItem('answers');
    questionId = parseInt(localStorage.getItem('questionId'));
    answers = answers !== null ? JSON.parse(answers) : {};
    answers[questionId] = localStorage.getItem('grade');
    localStorage.setItem('answers', JSON.stringify(answers));
}

function changeQuestion() {
    $('#slider').val(answers[questionId] ? answers[questionId] : 0);
    changeGrade(answers[questionId] ? answers[questionId] : 0);
    localStorage.setItem('questionId', questionId);

    $('.progress-bar').css('width', ((questionId * 100) / questionsCount) + '%');
    $('.progress-bar').text(questionId);
    $('.first-question').text(questionsObject[questionId].firstQuestion);
    $('.second-question').text(questionsObject[questionId].secondQuestion);
}

function changeGrade(grade) {
    grade = grade > 0 ? Math.ceil(grade) : Math.floor(grade);
    localStorage.setItem('grade', grade);
    $('.grade').removeClass('active');
    $('.grade' + grade).addClass('active');
}
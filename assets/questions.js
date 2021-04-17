let gender = localStorage.getItem("gender");
if (gender === null || gender === undefined) {
    window.location.href = 'index.html';
}

let answers = localStorage.getItem("answers");
if (!answers) {
    if (questionsObject.length) {
        alert('No questions found');
        window.location.href = 'index.html';
    }
    localStorage.setItem('questionId', 1);
}

changeQuestion(localStorage.getItem('questionId'));
if (parseInt(localStorage.getItem('questionId')) === questionsCount) {
    $('.next-question').text('Получить результат');
}

let grade = 0;
$(document).on('input', '#slider', function() {
    changeGrade($(this).val());
});

function changeGrade(grade) {
    grade = grade > 0 ? Math.ceil(grade) : Math.floor(grade);
    localStorage.setItem('grade', grade);
    $('.grade').removeClass('active');
    $('.grade' + grade).addClass('active');
}

$('.next-question').click(function () {
    let answers = localStorage.getItem('answers');
    let questionId = parseInt(localStorage.getItem('questionId'));

    answers = answers !== null ? JSON.parse(answers) : {};
    answers[questionId] = localStorage.getItem('grade');
    localStorage.setItem('answers', JSON.stringify(answers));

    if (questionId === questionsCount - 1) {
        $('.next-question').text('Получить результат');
    }
    if (questionId !== questionsCount) {
        questionId++;

        $('#slider').val(answers[questionId] ? answers[questionId] : 0);
        changeGrade(answers[questionId] ? answers[questionId] : 0);
        changeQuestion(questionId);
        localStorage.setItem('questionId', questionId);
    } else {
        window.location.href = 'result.html';
    }
});

$('.prev-question').click(function () {
    let answers = localStorage.getItem('answers');
    let questionId = parseInt(localStorage.getItem('questionId'));

    answers = answers !== null ? JSON.parse(answers) : {};
    answers[questionId] = localStorage.getItem('grade');
    localStorage.setItem('answers', JSON.stringify(answers));

    if (questionId === questionsCount) {
        $('.next-question').text('Следующий вопрос');
    }

    if (questionId !== 1) {
        questionId--;

        $('#slider').val(answers[questionId]);
        changeGrade(answers[questionId]);
        changeQuestion(questionId);
        localStorage.setItem('questionId', questionId);
    }
});



function changeQuestion(questionId) {
    $('.first-question').text(questionsObject[questionId].firstQuestion);
    $('.second-question').text(questionsObject[questionId].secondQuestion);
}
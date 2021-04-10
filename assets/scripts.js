$('.gender').click(function() {
    $(this).find('.btn').toggleClass('active');
    if ($(this).find('.btn-primary').length>0) {
        $(this).find('.btn').toggleClass('btn-primary');
    }

    $(this).find('.btn').toggleClass('btn-default');
    localStorage.setItem('gender', $(this).find('.active').val());

    if (localStorage.getItem('gender') !== null) {
        $('.start-test').removeClass('disabled');
    }
});

let questionsArray = {
    1: {
        'firstQuestion': 'Обычно мне очень скучно',
        'secondQuestion': 'Обычно я полон энергии',
        'ascending': true
    },
    2: {
        'firstQuestion': 'Жизнь кажется мне всегда волнующей и захватывающей',
        'secondQuestion': 'Жизнь кажется мне совершенно спокойной и рутинной',
        'ascending': false
    },
    3: {
        'firstQuestion': 'В жизни я не имею определенных целей и намерений',
        'secondQuestion': 'В жизни я имею очень ясные целя и намерения',
        'ascending': true
    },
    4: {
        'firstQuestion': 'Моя жизнь представляется мне крайне бессмысленной и бесцельной',
        'secondQuestion': ' Моя жизнь представляется мне вполне осмысленной и целеустремленной',
        'ascending': true
    },
    5: {
        'firstQuestion': 'Каждый день кажется мне всегда новым и непохожим на другие',
        'secondQuestion': 'Каждый день кажется мне совершенно похожим на все другие',
        'ascending': false
    },
    6: {
        'firstQuestion': 'Когда я уйду на пенсию, я займусь интересными вещами, которыми всегда мечтал заняться',
        'secondQuestion': 'Когда я уйду на пенсию, я постараюсь не обременять себя никакими заботами',
        'ascending': false
    },
    7: {
        'firstQuestion': 'Моя жизнь сложилась именно так, как я мечтал',
        'secondQuestion': 'Моя жизнь сложилась совсем не так, как я мечтал',
        'ascending': false
    },
    8: {
        'firstQuestion': 'Я не добился успехов в осуществлении своих жизненных планов',
        'secondQuestion': 'Я осуществил многое из того, что было мною запланировано в жизни',
        'ascending': true
    },
    9: {
        'firstQuestion': 'Моя жизнь пуста и неинтересна',
        'secondQuestion': 'Моя жизнь наполнена интересными делами',
        'ascending': true
    },
    10: {
        'firstQuestion': 'Если бы мне пришлось подводить сегодня итог моей жизни, то я бы сказал, что она была вполне осмысленной',
        'secondQuestion': 'Если бы мне пришлось сегодня подводить итог моей жизни, то я бы сказал, что она не имела смысла',
        'ascending': false
    },
    11: {
        'firstQuestion': 'Если бы я мог выбирать, то я бы построил свою жизнь совершенно иначе',
        'secondQuestion': 'Если бы я мог выбирать, то я бы прожил жизнь еще раз так же, как живу сейчас',
        'ascending': true
    },
    12: {
        'firstQuestion': 'Когда я смотрю на окружающий меня мир, он часто приводит меня в растерянность и беспокойство',
        'secondQuestion': ' Когда я смотрю на окружающий меня мир, он совсем не вызывает у меня беспокойства и растерянности',
        'ascending': true
    },
    13: {
        'firstQuestion': 'Я человек очень обязательный',
        'secondQuestion': 'Я человек совсем не обязательный',
        'ascending': false
    },
    14: {
        'firstQuestion': 'Я полагаю, что человек имеет возможность осуществить свой жизненный выбор по своему желанию',
        'secondQuestion': 'Я полагаю, что человек лишен возможности выбирать из-за влияния природных способностей и обстоятельств',
        'ascending': false
    },
    15: {
        'firstQuestion': 'Я определенно могу назвать себя целеустремленным человеком',
        'secondQuestion': 'Я не могу назвать себя целеустремленным человеком',
        'ascending': false
    },
    16: {
        'firstQuestion': 'В жизни а еще не нашел своего призвания и ясных целей',
        'secondQuestion': 'В жизни я нашел свое призвание и цели',
        'ascending': true
    },
    17: {
        'firstQuestion': 'Мои жизненные взгляды еще не определились',
        'secondQuestion': 'Мои жизненные взгляды вполне определились',
        'ascending': true
    },
    18: {
        'firstQuestion': 'Я считаю, что мне удалось найти призвание и интересные цели в жизни',
        'secondQuestion': 'Я едва ли способен найти призвание и интересные цели в жизни',
        'ascending': false
    },
    19:{
        'firstQuestion': 'Моя жизнь в моих руках, и я сам управляю ею',
        'secondQuestion': 'Моя жизнь не подвластна мне и она управляется внешними событиями',
        'ascending': false
    },
    20:{
        'firstQuestion': 'Мои повседневные дела приносят мне удовольствие и удовлетворение',
        'secondQuestion': 'Мои повседневные дела приносят мне сплошные неприятности и переживания',
        'ascending': false
    }
};

let types = {
    'goalsInLife': [3, 4, 10, 16, 17, 18],
    'lifeProcess': [1, 2, 4, 5, 7, 9],
    'lifeResult': [8, 9, 10, 12, 20],
    'myLocusControl': [1, 15, 16, 19],
    'lifeLocusControl': [7, 10, 11, 14, 18, 19]
}


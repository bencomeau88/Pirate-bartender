var answers = [];
var current_index = 0;
var random_number = 0;
var end = false;

var questions = [

    {
        question: "Do you like drink strong?",
        flavor: 'strong',
        answer: [true, false],
        ingredients: ['Whiskey', 'Rum', 'Gin']
    },

    {
        question: 'Do you like a salty tang?',
        flavor: 'salty',
        answer: [true, false],
        ingredients: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"]
    },

    {
        question: "Do you like bitters?",
        flavor: 'bitter',
        answer: [true, false],
        ingredients: ["Shake o' bitters", "Splash o' tonic", "Lavender syrup"]
    },

    {
        question: "Do you like sweet drinks?",
        flavor: 'sweet',
        answer: [true, false],
        ingredients: ["Sugar cube", "Splash o' cola", "Vermouth"]
    },

    {
        question: 'Do you like fruity drinks',
        flavor: 'sweet',
        answer: [true, false],
        ingredients: ["Slice o' orange", "Dash o' cassis", "Cherry on top"]
    }
];

var stupid_names = {
    adjective: ["Dastardly", "Pusillanimous", "Obsequious"],
    title: ["Royal", "Admiral", "Deck-Hand"]
};

var randomNumber = function() {
    random_number = Math.floor((Math.random() * 3) + 0)
    return random_number
};

var randomName = function() {
    var random_adjective = stupid_names.adjective[randomNumber()];
    var random_title = stupid_names.title[randomNumber()];
    console.log(random_adjective + random_title);
}

var checkIndex = function() {
    if (current_index >= 5) {
        end = true;
    } else {
        console.log('poo')
    }
}

// var answerDisplay = function(answers){
// 	var the_end = "<h2> YARRR Here is Your Drink Ye salty Sea-Dog </h2>"
// 	for(i=0;i<answers.length;i++){
// 	var answers = "<p>" + answers[i] + "</p>"; 
// 	var $answers_page = answers + the_end
// 	}
// }

var renderQuestion = function(question) {
    // var yes_no = question.answer;
    var yes = question.answer[0];
    var no = question.answer[1];
    var ingredients = question.ingredients;
    var html = "<h2>" + question.question + "</h2>" + "<label> <input type='radio' name='flavor' value='1'>" + yes +
        "</label>" + "<label> <input type='radio' name='flavor' value='0'>" + no + "</label>";
    var $elements = $(html);

    $elements.find("input").on('click', function() {

        console.log($(this).val())
        current_index++;
        checkIndex();
        if (end == false) {
            fancyRender();
        } else {
            // fancyAnswers();
            console.log('we made it');
            var title = "<h2 class='title'> YARR Here is Your Drink Ye Salty Sea-Dog </h2>";
            var random_names = "<h3 class='stupid_name'>" + stupid_names.adjective[randomNumber()] + " " + stupid_names.title[randomNumber()] + "</h3>"

            var drink = answers.map(function(answer) {
                return '<li>' + answer + '</li>'
            });
            $.fancybox({
                'content': title + random_names + drink.join('')
            });
        }


        random_number = randomNumber();
        if ($(this).val() == 1) {
            answers.push(ingredients[random_number]);
        } else {
            console.log('boo')
        }

    })
    return $elements;


};

// var fancyAnswers = function(){
// 	var answers_fancy = answers.join();
// 	$.fancybox({
// 		'content': answerDisplay(answers_fancy)
// 	});
// }



var fancyRender = function() {
    var current = questions[current_index];
    $.fancybox({
        'content': renderQuestion(current)
    });

}

$(document).ready(function() {

    $('.fancy_header').fancybox({
        'content': $('.fancy_instructions')
    });

    // fancyAnswers();

    $('.start').on('click', function(e) {
        e.preventDefault();
        console.log(this);
        //how to close a fancybox: $.fancybox.close();
        fancyRender();



    })

})

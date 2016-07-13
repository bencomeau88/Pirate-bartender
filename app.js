
var questions = ["Do ye like yer drinks strong?", "Do ye like it with a salty tang?", "Are ye a lubber who likes it bitter?",
	 "Would ye like a bit of sweetness with yer poison?", "Are ye one for a fruity finish?"];
var ingredients = {
	strong: ["Glug o' rum", "Slug o' whiskey", "Splash o' gin"],
	salty: ["Olive on a stick", "Salt-dusted rim", "Rasher of bacon"],
	bitter: ["Shake o' bitters", "Splash o' tonic", "Twist o' lemon peel"],
	sweet: ["Sugar cube", "Spoonful o' honey", "Splash o' cola"],
	fruity: ["Slice o' orange", "Dash o' cassis", "Cherry on top"]
}

var createDrink = function(ingredients){
	console.log(ingredients);
	this.strong = ingredients.strong,
	this.salty = ingredients.salty,
	this.bitter = ingredients.bitter,
	this.sweet = ingredients.sweet,
	this.fruity = ingredients.fruity
}

$(document).ready(function(){

	$('.fancy_header').fancybox({
		'content': $('.fancy_instructions')
	});
	
	$('.start').on('click',function(e){
		e.preventDefault();
		//how to close a fancybox: $.fancybox.close();
		//this hides the content in a fancybox...we want to hide the content then show the ...
		// ...questions + radio buttons
		$('.fancy_instructions').hide();
	})


})


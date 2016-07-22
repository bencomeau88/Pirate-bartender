var Bartender = function(){
  // this = {}
	this.ingredients = ["salt", 'bacon', 'lime juice'];
  this.alcohol = ["whiskey", "gin", "vodka"];
  // return this
}
// b.makeDrink() => ["salt", "whiskey"]
Bartender.prototype.makeDrink = function(){
	// Pick a random ingredient
  var ingredient =	this.getIngredient();
  // Pick  random alcohol
  var alcohol = this.getAlcohol();
	// Return the drink
  var drink = [ingredient, alcohol];
  return drink;
}

Bartender.prototype.getIngredient = function(){
  var random_ingredient = _.sample(this.ingredients);
  return random_ingredient;
}

Bartender.prototype.getAlcohol = function(){
 var random_alcohol = _.sample(this.alcohol);
 return random_alcohol;
}


$(document).ready(function(){
	var bartender = new Bartender();
	console.log(bartender.makeDrink());
});
//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


var x = "";
var first = 0;
var last =  0;
var feFirst = ["Olga", "Helga", "Lena"]; 
var maFirst = ["Sven", "Hans", "Ollie"];
var family = ["Anderson", "Eriksen", "Bjornstad", "Engelstad", "Rosdahl"];

function Human(age, sex, weight){
	this.age = age;
	this.sex = sex;
		if (this.sex == 1){
			x = "male";
			first = maFirst[randomNumber(0,2)];
			last = family[randomNumber(0,4)]
		}else{
			x = "female";
			first = feFirst[randomNumber(0,2)];
			last = family[randomNumber(0,4)]
		};
	this.weight = weight;
}
 
$(document).ready(function (){
	$("#randomPerson").on("click", function (){
		var Human1 = new Human(randomNumber(1,100), randomNumber(1,2), randomNumber(101,200));
		$("#start").prepend("<li>" + first + " " + last + "<br/>Age: " + Human1.age + ", Sex: " + x + ", Weight: " + Human1.weight + "</li><br/>")
	});
});
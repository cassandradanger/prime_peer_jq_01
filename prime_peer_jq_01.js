//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


var feFirst = ["Olga", "Helga", "Lena"]; 
var maFirst = ["Sven", "Hans", "Ollie"];
var family = ["Anderson", "Eriksen", "Bjornstad", "Engelstad", "Rosdahl"];

function Human(age, sex, weight){
	this.age = age;

	if (sex == 1){
		this.sex = "male";
		this.first = maFirst[randomNumber(0,2)];
		this.last = family[randomNumber(0,4)]
	}else{
		this.sex = "female";
		this.first = feFirst[randomNumber(0,2)];
		this.last = family[randomNumber(0,4)]
	};
	this.weight = weight;
}
 
$(document).ready(function (){
	$("#randomPerson").on("click", function (){
		var Human1 = new Human(randomNumber(1,100), randomNumber(1,2), randomNumber(101,200));
		$("#start").prepend("<li>" + Human1.first + " " + Human1.last + "<br/>Age: " + Human1.age + ", Sex: " + Human1.sex
		 + ", Weight: " + Human1.weight + "</li><br/>")
	});
});
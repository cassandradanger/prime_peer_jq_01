//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
/*var age = randomNumber(1,100);
var sex = randomNumber(1,5);
	if (sex <= 2){
		return "male"
	}else if(sex = 3){
		return "um...........?"
	}else{
		return "female"
	}
var weight = randomNumber(10,200);
*/

var x = "";
var first = 0;//[randomNumber(0,2)]; 
var last =  0;
var feFirst = ["Olga", "Helga", "Lena"]; 
var maFirst = ["Sven", "Hans", "Ollie"];
var family = ["Johnson", "Erikson", "Mitchell"];

function Human(age, sex, weight){
	this.age = age;
	this.sex = sex;
		if (this.sex == 1){
		 x = "male";
		first = maFirst[randomNumber(0,2)];
		last = family[randomNumber(0,2)]
	}else{
		x = "female";
		first = feFirst[randomNumber(0,2)];
		last = family[randomNumber(0,2)]
	};

	this.weight = weight;

}

	if (x = "female"){
		;}
		
 
$(document).ready(function (){
	$("#randomPerson").on("click", function (){
		var Human1 = new Human(randomNumber(1,100), randomNumber(1,2), randomNumber(101,200));
		$("#start").prepend("<li>" + first + " " + last +" Age: " + Human1.age + ", Sex: " + x + ", Weight: " + Human1.weight + "</li>")
	});
});
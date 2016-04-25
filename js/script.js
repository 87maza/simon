var success = false;
var round = 1;
var winningCombos = [];
var humanCombos = [];
var redSound = document.getElementById('redSound');
var blueSound = document.getElementById('blueSound');
var greenSound = document.getElementById('greenSound');
var yellowSound = document.getElementById('yellowSound');
var bryan = document.getElementById('bryan');
bryan.load();
var reset = document.getElementById('reset');
reset.addEventListener('click', function(){
	bryan.play();
	alert('Bryan McKnight-"Started Back at One"');
	round = 1;
	winningCombos = [];
	humanCombos	= [];
	document.getElementById('round').innerText = round;
});
var red = document.getElementById('red');
red.addEventListener('click', function(){
	redSound.play();
	humanCombos.push('red');
	checkWinner();
});
var blue = document.getElementById('blue');
blue.addEventListener('click', function(){
	blueSound.play();
 	humanCombos.push('blue');
	checkWinner();
});
var green = document.getElementById('green');
green.addEventListener('click', function(){
	greenSound.play();
 	humanCombos.push('green');
 	checkWinner();
});
var yellow = document.getElementById('yellow');
yellow.addEventListener('click', function(){
	yellowSound.play();
 	humanCombos.push('yellow');
 	checkWinner();
});

function random() {
	var colors = [red, blue, green, yellow];
	var sounds = [redSound, blueSound, greenSound, yellowSound];
	var num = Math.floor(Math.random() * 3) + 1;
	var rand = colors[num];
	var randSound = sounds[num];
	rand.classList.add('light');
	winningCombos.push(rand.children[1].innerText.toLowerCase());
	randSound.play();
	setTimeout(function(){
		rand.classList.remove('light');
	}, 1000);
	humanCombos.pop();  //doubles down on the humanCombos, need to pop it

}
function checkWinner() {
	if(humanCombos.length >= winningCombos.length && humanCombos.join('') !== winningCombos.join('')){
		alert('try again =(');
		roundUp();
		winningCombos=[];
		humanCombos = [];
		return;
	}
	if(humanCombos.length>winningCombos.length) {
		humanCombos = [];
		checkWinner();
	}
	if(humanCombos.length > 0) {
		if(humanCombos.join('')===winningCombos.join('')){
			alert('hell yeah =)');
			document.getElementById('round').innerText = round+1;
			success = true;
			round++
			winningCombos = [];
			humanCombos = [];
			roundUp();
		}
	}
	return;
}
function roundUp(){
	if(round>=20){
		alert('ok bro you win! =)')
	}
	for (var i=0; i<round; i++) {
		(setTimeout(function(){
			random();
		}, 1500*i));
	}
}


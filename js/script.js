var redSound = document.getElementById('redSound');
redSound.load();
var blueSound = document.getElementById('blueSound');
blueSound.load();
var greenSound = document.getElementById('greenSound');
greenSound.load();
var yellowSound = document.getElementById('yellowSound');
yellowSound.load();

var winningCombos = [];
var humanCombos = [];
var randomCalls = 0;
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
	(setTimeout(function(){
	var colors = [red, blue, green, yellow];
	var sounds = [redSound, blueSound, greenSound, yellowSound];
	var num = Math.floor(Math.random() * 3) + 1;
	var rand = colors[num];
	var randSound = sounds[num];
	console.log(randSound);
	rand.classList.add('light');
	winningCombos.push(rand.children[1].innerText.toLowerCase());
	randSound.play();
	setTimeout(function(){
		rand.classList.remove('light');
	}, 1000);
	randomCalls++
	humanCombos.pop();  //doubles down on the humanCombos, need to pop it
	
	}, 1500));

}

function checkWinner() {
	if(humanCombos.length >= winningCombos.length && humanCombos.join('') !== winningCombos.join('')){
		alert('try again');
		humanCombos = [];
		return;
	}
	if(humanCombos.length>winningCombos.length) {
		humanCombos = [];
		checkWinner();
	}
	if(humanCombos.length > 0) {
		if(humanCombos.join('')===winningCombos.join('')){
			alert('hell yeah');
			winningCombos = [];
			humanCombos = [];
		}
	}

	return;
}



// random(); 	(setTimeout(function(){
// 		random();
// 	}, 1500));
// (setTimeout(function(){
// 		random();
// 	}, 3000));
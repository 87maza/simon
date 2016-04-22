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
red.addEventListener('click', function(){redSound.play(); humanCombos.push('red')});
var blue = document.getElementById('blue');
blue.addEventListener('click', function(){blueSound.play(); humanCombos.push('blue')});
var green = document.getElementById('green');
green.addEventListener('click', function(){greenSound.play(); humanCombos.push('green')});
var yellow = document.getElementById('yellow');
yellow.addEventListener('click', function(){yellowSound.play(); humanCombos.push('yellow');});


function random() {
	var colors = [red, blue, green, yellow];
	var num = Math.floor(Math.random() * 3) + 1;
	var rand = colors[num];
	rand.classList.add('light');
	winningCombos.push(rand.children[1].innerText.toLowerCase());
	rand.click();
	setTimeout(function(){
		rand.classList.remove('light');
	}, 1000);
	randomCalls++
	humanCombos.pop();  //doubles down on the humanCombos, need to pop it
}

function humanTurn() {
	alert('please click human!');
	
}
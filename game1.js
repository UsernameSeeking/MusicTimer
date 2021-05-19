// JavaScript source code

'use strict'

function game1() {
	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var ptext = document.getElementById('playGame1_text');
	var plbrd = document.getElementById('playboard');
	var ingrd = document.getElementById('bottomground');
	if (page1.style.display == "block") {
		page1.style.display = "none";
		page2.style.display = "block";
		ptext.innerHTML = "Start";
		if (innerWidth <= innerHeight) {
			plbrd.style.width = "80vw";
			plbrd.style.height = "80vw";
			ingrd.style.width = "calc(80vw - 40px)";
			ingrd.style.height = "calc(80vw - 40px)";
		}
	}
	else {
		if (ptext.innerHTML == "Play again") {
			ptext.innerHTML = "Start";
			var tiles = document.getElementsByClassName('tile');
			var cover = document.getElementById('cover');
			var congr = document.getElementsByClassName('countdown_number');
			cover.remove();
			congr[1].remove();
			for (var i = 0; i < 16; i++) {
				tiles[i].style.backgroundColor = "white";
				choice[i].style.backgroundColor = "white";
			}
		}
		else startGame();
	}
}

function back() {
	var ptext = document.getElementById('playGame1_text');
	page2.style.display = "none";
	page1.style.display = "block";
	ptext.innerHTML = "Play Game";
}

var tilsa = [];
var choice = document.getElementsByClassName('btile');
var p_ans = [];

function startGame() {
	var grd = document.getElementsByClassName('ground');
	var countnum = document.getElementById('countdown_number');
	if (grd[1].style.display == "none") grd[1].style.display = "block";
	tilsa = [];
	p_ans = [];
	for (var i = 0; i < grd.length; i++) {
		grd[i].style.display = "none";
	}
	countnum.innerHTML = "Start!";
	var x = setTimeout(function(){for (var i = 0; i < grd.length; i++) grd[i].style.display = "block";countnum.innerHTML = "";}, 1500);
	gamePlay();
}

function gamePlay() {
	var tiles = document.getElementsByClassName('tile');
	var grd = document.getElementsByClassName('ground');
	for (var i = 0; i < 8; i++) {
		var sub = Math.floor(Math.random()*15);
		while (tiles[sub].style.backgroundColor == "blue") {sub = Math.floor(Math.random()*15);}
		tiles[sub].style.backgroundColor = "blue";
		tilsa.push(sub);
	}
	setTimeout(function(){grd[1].style.display = "none";}, 2500);
}

function checkchoice(no) {
	var plb = document.getElementById('playboard');
	choice[no].style.backgroundColor = "blue";
	p_ans.push(no);
	if (p_ans.length == 8) {
		var cover = document.createElement('div');
		cover.className = "ground";
		cover.id = "cover";
		plb.appendChild(cover);
		checkans();
	}
	console.log(tilsa);
	console.log(p_ans.length);
	console.log(p_ans);
}

function checkans() {
	var plb = document.getElementById('playboard');
	var cover = document.getElementById('cover');
	var congr = document.createElement('p');
	var tiles = document.getElementsByClassName('tile')
	var ptext = document.getElementById('playGame1_text');
	congr.className = "countdown_number";
	tilsa.sort();
	p_ans.sort();
	console.log(tilsa);
	console.log(p_ans);
	if (compare_arrays(tilsa, p_ans) == true) {
		cover.style.backgroundColor = "black";
		cover.style.opacity = 0.4;
		congr.innerHTML = "Correct!";
		congr.style.color = "green";
		congr.style.fontSize = "80px";
		congr.style.opacity = "0.8";
		plb.appendChild(congr);
	}
	else {
		cover.style.backgroundColor = "black";
		cover.style.opacity = 0.4;
		congr.innerHTML = "Incorrect!";
		congr.style.color = "red";
		congr.style.fontSize = "80px";
		congr.style.opacity = "0.8";
		plb.appendChild(congr);
	}
	ptext.innerHTML = "Play again";
}

function compare_arrays(m, n) {
	if (m.length != n.length) return false;
	else {
		for (var i = 0; i < m.length; i++) {
			if (m[i] != n[i]) return false;
		}
		return true;
	}
}
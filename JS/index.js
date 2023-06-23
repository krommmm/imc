// 3. Développer un Calculateur d’IMC en JavaScript
//18 à 65 ans
// hors nanisme, gigantisme, bodybuilding, femmes enceintes ou allaitant
// calcul = 60/(1.6*1.6)  =  23.4
var un = document.querySelector('.un');
var deux = document.querySelector('.deux');
var trois = document.querySelector('.trois');
var quatre = document.querySelector('.quatre');
var cinq = document.querySelector('.cinq');
var six = document.querySelector('.six');
var boutonCalculer = document.querySelector('.bouton');

let age = document.querySelector('.age');
let taille = document.querySelector('.taille');
let poids = document.querySelector('.poids');

var imcPara = document.querySelector(".imc");

const reset = () => {
	let imcResult = document.querySelector('.imc_result');
	let imcResultChild = imcResult.querySelectorAll('p');
	//console.log(imcResultChild.length);
	for (let i = 0; i < imcResultChild.length; i++) {
		imcResultChild[i].style.color = 'black';
	}
	age.value = '';
	taille.value = '';
	poids.value = '';
	
};

const displayImc = (imc) => {
	if (imc < 18.5) {
		un.style.color = 'red';
	} else if (imc < 25) {
		deux.style.color = 'red';
	} else if (imc < 30) {
		trois.style.color = 'red';
	} else if (imc < 35) {
		quatre.style.color = 'red';
	} else if (imc < 40) {
		cinq.style.color = 'red';
	} else {
		six.style.color = 'red';
	}
};

const handleSubmit = (e) => {
	e.preventDefault();

	if (age.value < 18 || age.value > 65) {
		alert(
			"l'imc ne peut être calculer que pour des personnes âgées entre 18 et 65 ans."
		);
	} else {
		let weight = poids.value;
		let size = taille.value;
		size /= 100;
		let imc = weight / (size * size);
		imc = imc.toFixed(2);
		//console.log(imc);
		imcPara.textContent = `Imc : ${imc}`;
		reset();
		displayImc(imc);
	}
};

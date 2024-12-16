function socialMedia(){
	alert("Error. Estas redes sociales todavía no han sido creadas, por favor, inténtalo próximamente.");
}

function registar(){
	var fc = document.getElementById("friendsCorrecto").checked;
	var ff1 = document.getElementById("friendsFalso1").checked;
	var ff2 = document.getElementById("friendsFalso2").checked;
	var ff3 = document.getElementById("friendsFalso3").checked;
	var wednesday = document.getElementById("wednesday").value;
	var laCasaDePapel = document.getElementById("laCasaDePapel").value;
	var juegoDeTronos = document.getElementById("juegoDeTronos").value;
	var elite= document.getElementById("elite").value;
	var bridgerton = document.getElementById("bridgerton").value;
	var lorelai_gilmore = document.getElementById("lorelai_gilmore").value;
	var stf1 = document.getElementById("strangerThingsFalsa1").checked;
	var stc = document.getElementById("strangerThingsCorrecta").checked;
	var stf2 = document.getElementById("strangerThingsFalsa2").checked;
	var stf3 = document.getElementById("strangerThingsFalsa3").checked;
	var mandalorian = document.getElementById("mandalorian").value;
	var sexoEnNuevaYork = document.getElementById("sexoEnNuevaYork").value;
	var theWitcher = document.getElementById("theWitcher").value;
	var elJuegoDelCalamar = document.getElementById("elJuegoDelCalamar").value;
	var doctorHouse = document.getElementById("doctorHouse").value;
	var sexEducation = document.getElementById("sexEducation").value;
	var theCrown = document.getElementById("theCrown").value;
	var comoConociAVuestraMadre = document.getElementById("comoConociAVuestraMadre").value;
	var peakyBlinders = document.getElementById("peakyBlinders").value;
	var theWalkingDead = document.getElementById("theWalkingDead").value;
	var theOffice = document.getElementById("theOffice").value;
	var losSoprano = document.getElementById("losSoprano").value;
	var suma = 0;
	
	if (fc === true && ff1 === false && ff2 === false && ff3 === false) {
		suma++;
	}
	
	if(wednesday==="1"){
		suma++;
	}
	
	if(laCasaDePapel==="El Profesor"||laCasaDePapel==="Sergio Marquina"){
		suma++;
	}
	
	if(juegoDeTronos==="1"){
		suma++;
	}
	
	if(elite==="Las Encinas"){
		suma++;
	}
	
	if(bridgerton==="1"){
		suma++;
	}
	
	if(lorelai_gilmore==="Las Chicas Gilmore" || lorelai_gilmore==="Gilmore Girls"){
		suma++;
	}
	
	if(stc===true&&stf1===false&&stf2===false&&stf3===false){
		suma++;
	}
	
	if(mandalorian==="Din Djarin"){
		suma++;
	}
	
	if(sexoEnNuevaYork==="1"){
		suma++;
	}
	
	if(theWitcher==="Geralt de Rivia"){
		suma++;
	}
	
	if(elJuegoDelCalamar==="1"){
		suma++;
	}
	
	if(doctorHouse==="Dr. Gregory House"||doctorHouse==="Doctor Gregory House"){
		suma++;
	}
	
	if(sexEducation==="1"){
		suma++;
	}
	
	if(theCrown==="Reina Isabel II de Inglaterra" || theCrown==="Isabel II de Inglaterra"){
		suma++;
	}
	
	if(comoConociAVuestraMadre==="1"){
		suma++;
	}
	
	if(peakyBlinders==="Thomas Shelby"){
		suma++;
	}
	
	if(theWalkingDead==="1"){
		suma++;
	}
	
	if(theOffice==="The Office"){
		suma++;
	}
	
	if(losSoprano==="1"){
		suma++;
	}
	
	var nota = suma/2;
	
	if(nota<5){
		resultadoCuestionario.textContent = "Tu nota ha sido solo de un "+nota+", solo acertaste " + suma + " preguntas. Parece ser que no tienes suficiente tiempo en tu vida para ver series, ¿Tal vez ya sea hora de relajarse y hacer una maratón de series, no crees :)?";
	}
	
	if(nota===5){
		resultadoCuestionario.textContent = "Tu nota ha sido de un "+nota+", solo acertaste " + suma + " preguntas. Aprobao por los pelos, todavia te queda mucho por mejorar";
	}
	
	if(nota>5&&nota<7){
		resultadoCuestionario.textContent = "Tu nota ha sido de un "+nota+", acertaste un total de " + suma + " preguntas. Puedes dar mucho mas de ti y lo sabes, es hora de sofa y manta, y de que te llenes de cultura";
	}
	
	if(nota>=7&&nota<9){
		resultadoCuestionario.textContent = "Tu nota ha sido de un "+nota+", acertaste un total de " + suma + " preguntas. Felicidades, se nota tu dominio sobre las series y la cultura";
	}
	
	if(nota>=9&&nota<10){
		resultadoCuestionario.textContent = "Tu nota ha sido de un "+nota+", acertaste un total de " + suma + " preguntas. Felicidades, tu conocimiento sobre las series es casi perfecto. Cuélgate una medalla";
	}
	
	if(nota===10){
		resultadoCuestionario.textContent = "Tu nota ha sido de un "+nota+", acertaste un total de " + suma + " preguntas. Muchas felicidades, tu conocimeinto sobre las series y la cultura es supremo. Se nota que eres un auténtico devorador de series. Desde lo más profundo de nuestro corazón, nuestra más sincera enhorabuena :)"
	}
	
	resultadoCuestionario.className = "mensajeResultado";
}

function proceso(){
	alert("Proyecto en curso... Estreno de la página proximamente");
}

// Función para fijar el menú al hacer scroll
const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', () => {
    if (window.scrollY > nav.offsetTop) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});
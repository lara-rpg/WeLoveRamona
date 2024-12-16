//javascript griega

var i=0;



function menu(){
	
	i++;
	if(i===2) i=0; //0 es cerrado y 1 abierto

	if(i===0){
		document.getElementById("menu_lateral").style.width="0vw";
		document.getElementById("menu_lateral").style.boxShadow="none";
	}else{
		document.getElementById("menu_lateral").style.width="15vw";
		document.getElementById("menu_lateral").style.boxShadow="2px 0px 5px 3px #1b1b1d";
	}
}

function socialMedia(){
	alert("Error. Estas redes sociales todavía no han sido creadas. Por favor, inténtalo próximamente.");
}

function girarADetras(card){
	card.querySelector('.flip').style.transform = 'rotateY(180deg)';
	
}

function girarADelante(card){
	card.querySelector('.flip').style.transform = 'rotateY(0deg)';
}
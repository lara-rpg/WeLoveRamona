
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

function vista(num){
	
	document.getElementById("vista").className=" ";
	
	switch (num){
		case 1:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Alfheim, hogar de los elfos:";
			break;
		case 2:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Asgard, hogar de los dioses Aesir:";
			break;
		case 3:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Jotunheim, hogar de los jotunn:";
			break;
		case 4:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Vanaheim, hogar de los dioses Vanir:";
			break;
		case 5:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Midgard, hogar de los hombres:";
			break;
		case 6:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Svartalfheim, hogar de los enanos:";
			break;
		case 7:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Niflheim, el reino helado:";
			break;
		case 8:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Helheim, donde habitan los muertos:";
			break;
		case 9:
			document.getElementById("titulo_vista").innerHTML="Bienvenidos a Muspelheim, el reino en llamas:";
			break;
	}
	
	document.getElementById("img_vista").src="../img/vista"+num+".jpg";
}

function socialMedia(){
	alert("Error. Estas redes sociales todavía no han sido creadas. Por favor, inténtalo próximamente.");
}
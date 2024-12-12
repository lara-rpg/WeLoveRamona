//Proyecto FDW. REVISTA, APARTADO DE CULTURA, MITOLOGÍA

var cont=2;
var i=0;

function inicio () {
	
	setInterval(cambio, 3000);
} 

function cambio (){
	
	cont++;
	if(cont===7) cont=2;

	document.getElementById('header').style.backgroundImage = "url('inspo/headermenu" + cont + ".jpg')";

}

function cambiar_tema(){
	i++;
	if(i===2) i=0;
	
		
	
	if(i===0){ //modo dark
		document.body.className = "bodydark"
		document.getElementById("intro").className = "introdark"
		document.getElementById("opgreek").className = document.getElementById("opgreek").className.replace("oplight", "opdark");
		document.getElementById("opnorse").className = document.getElementById("opnorse").className.replace("oplight", "opdark");
		//document.getElementsByTagName("footer").className = 
	}else{
		document.body.className = "bodylight"
		document.getElementById("intro").className = "introlight"
		document.getElementById("opgreek").className = document.getElementById("opgreek").className.replace("opdark", "oplight");
		document.getElementById("opnorse").className = document.getElementById("opnorse").className.replace("opdark", "oplight");
	}
}

function socialMedia(){
	alert("Error. Estas redes sociales todavía no han sido creadas, por favor, inténtalo próximamente.");
}
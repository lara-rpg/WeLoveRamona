//Proyecto FDW. REVISTA, APARTADO DE CULTURA, MITOLOGÍA

var cont=1;
var i=0;

function inicio () {
	
	setInterval(cambio, 3000);
} 

function cambio (){
	
	cont++;
	if(cont===7) cont=1;

	document.getElementById('header').style.backgroundImage = "url('img/headermenu" + cont + ".jpg')";

}

function cambiar_tema(){
	i++;
	if(i===2) i=0;
	
		
	
	if(i===0){ //modo dark
		document.body.className = "bodydark"
		document.getElementById("intro").className = "introdark"
		document.getElementById("opgreek").className = document.getElementById("opgreek").className.replace("oplight", "opdark");
		document.getElementById("opnorse").className = document.getElementById("opnorse").className.replace("oplight", "opdark");
		document.getElementById("footer").className = "footerdark";
		document.getElementById("theme").innerHTML = " Dark Mode ";
		document.getElementById("temaimg").src="img/moon1.png"
		document.getElementById("rrss").src="img/rrssdark.png"
	}else{ //modo light
		document.body.className = "bodylight"
		document.getElementById("intro").className = "introlight"
		document.getElementById("opgreek").className = document.getElementById("opgreek").className.replace("opdark", "oplight");
		document.getElementById("opnorse").className = document.getElementById("opnorse").className.replace("opdark", "oplight");
		document.getElementById("footer").className = "footerlight";
		document.getElementById("theme").innerHTML = " Light Mode ";
		document.getElementById("temaimg").src="img/sol1.png"
		document.getElementById("rrss").src="img/rrsslight.png"
	}
}

function socialMedia(){
	alert("Error. Estas redes sociales todavía no han sido creadas, por favor, inténtalo próximamente.");
}
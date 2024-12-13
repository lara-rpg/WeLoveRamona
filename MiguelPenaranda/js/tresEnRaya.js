let turno = 1;
let fichas = ["O", "X"];
let puestas = 0;
let partidaAcabada = false;
let textoVictoria = document.getElementById("ganaste");
let botones = Array.from(document.querySelectorAll("#tablero button"));
let victorias = 0;
let derrotas = 0;
let empates = 0;

const marcadorVictorias = document.getElementById("victorias");
const marcadorDerrotas = document.getElementById("derrotas");
const marcadorEmpates = document.getElementById("empates");

//Añade el evento a los botones del tablero
botones.forEach(boton => boton.addEventListener("click", ponerFicha));

//Función para colocar una ficha
function ponerFicha(event)
{
    let botonPulsado = event.target;

    if(!partidaAcabada && botonPulsado.innerHTML === "")
	{
        botonPulsado.innerHTML = fichas[turno];
        puestas += 1;

        let estadoPartida = estado();
        if(estadoPartida === 0)
		{
            cambiarTurno();
            if(puestas < 9)
			{
                ia();
                estadoPartida = estado();
                puestas += 1;
                cambiarTurno();
            }
        }

        //Gestiona el estado del juego según el resultado
        if(estadoPartida === 1)
		{
            textoVictoria.innerHTML = "¡GANASTE!";
            textoVictoria.style.visibility = "visible";
            textoVictoria.style.color = "green"; // Cambia el texto a verde
            partidaAcabada = true;
            victorias++;
            marcadorVictorias.textContent = victorias;
        }
		else if(estadoPartida === -1)
		{
            textoVictoria.innerHTML = "¡PERDISTE!";
            textoVictoria.style.visibility = "visible";
            textoVictoria.style.color = "red"; // Cambia el texto a rojo
            partidaAcabada = true;
            derrotas++;
            marcadorDerrotas.textContent = derrotas;
        }
		else if(puestas === 9 && estadoPartida === 0)
		{
            textoVictoria.innerHTML = "¡EMPATE!";
            textoVictoria.style.visibility = "visible";
            textoVictoria.style.color = "blue"; // Cambia el texto a azul para empate
            partidaAcabada = true;
            empates++;
            marcadorEmpates.textContent = empates;
        }
    }
}

//Función para cambiar de turno
function cambiarTurno()
{
    turno = turno === 1 ? 0 : 1;
}

//Función para verificar el estado del juego
function estado()
{
    let estado = 0;

    //Función auxiliar para comprobar si tres casillas son iguales
    function sonIguales(color, ...args)
	{
        let valores = args.map(x => x.innerHTML);
        if(valores[0] !== "" && valores.every(x => x === valores[0]))
		{
            args.forEach(x => x.style.backgroundColor = color);
            return true;
        }
        return false;
    }

    //Combinaciones ganadoras
    if(sonIguales(turno === 1 ? "green" : "red", botones[0], botones[1], botones[2]) ||
       sonIguales(turno === 1 ? "green" : "red", botones[3], botones[4], botones[5]) ||
       sonIguales(turno === 1 ? "green" : "red", botones[6], botones[7], botones[8]) ||
       sonIguales(turno === 1 ? "green" : "red", botones[0], botones[3], botones[6]) ||
       sonIguales(turno === 1 ? "green" : "red", botones[1], botones[4], botones[7]) ||
       sonIguales(turno === 1 ? "green" : "red", botones[2], botones[5], botones[8]) ||
       sonIguales(turno === 1 ? "green" : "red", botones[0], botones[4], botones[8]) ||
       sonIguales(turno === 1 ? "green" : "red", botones[2], botones[4], botones[6])) {
       return turno === 1 ? 1 : -1;
    }

    return estado;
}

//Función para que la IA juegue
function ia()
{
    let valores = botones.map(x => x.innerHTML);
    let posicion = -1;

    if(valores[4] === "")
	{
        posicion = 4;
    }
	else
	{
        do
		{
            posicion = Math.floor(Math.random() * 9);
        }
		while(valores[posicion] !== "");
    }

    botones[posicion].innerHTML = "O";
}

//Función para reiniciar el juego
function reiniciarJuego()
{
    botones.forEach(boton =>
	{
		boton.innerHTML = "";
		boton.style.backgroundColor = "";
	});

    turno = 1;
    puestas = 0;
    partidaAcabada = false;
    textoVictoria.style.visibility = "hidden";
    textoVictoria.style.color = "";
    textoVictoria.innerHTML = "GANASTE";
}

//Evento para el botón de reinicio
document.getElementById("reiniciar").addEventListener("click", reiniciarJuego);


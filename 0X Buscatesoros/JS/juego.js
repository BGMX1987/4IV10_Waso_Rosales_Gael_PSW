
let arr = [];      // estados: 0=espacio libre, 9=cofre, 1 a 8 = num de cofres contiguos
let tablero = [];  // estados .=cubierta, D=descubierta con numero, espacio=descubierta libre, 9=cofre abierto
let ancho = 30;
let alto = 30;
let cofre=9;
let numCofres = 20;
let bestScore=0;


function buscamonedas(){

	ancho = document.getElementById("ancho").value*1 +2;
	alto = document.getElementById("alto").value*1 +2;
	numCofres = document.getElementById("monedas").value;
	
	// Inicializar arreglos principal y de tablero
	borra_tabla();
	for (let i = 0; i < ancho; i++) {
		arr[i] = [];
		tablero[i] = [];
		for (let j = 0; j < alto; j++) {
			arr[i][j] = 0;
			tablero[i][j] = ".";
		}
	}

	// poner cofres en forma aleatoria
	for(let j = 0; j < numCofres;j++){
		let x = generateRandom(1,ancho-1);
		let y = generateRandom(1,alto-1);
		
		if (arr[x][y]==cofre) {
			j--;
		} else {
			arr[x][y]=cofre;
		}
	}

	// poner pistas de numero de cofres alrededor de cada cofre
	for(let i = 1; i < ancho-1; i++){
		for(let j = 1; j < alto-1; j++){

			if(arr[i][j]==cofre){
				if(!(arr[i][j+1]==cofre)){
					arr[i][j+1]++;
				}
				if(!(arr[i][j-1]==cofre)){
					arr[i][j-1]++;
				}
				if(!(arr[i+1][j]==cofre)){
					arr[i+1][j]++;
				}
				if(!(arr[i-1][j]==cofre)){
					arr[i-1][j]++;
				}
				if(!(arr[i+1][j+1]==cofre)){
					arr[i+1][j+1]++;
				}
				if(!(arr[i+1][j-1]==cofre)){
					arr[i+1][j-1]++;
				}
				if(!(arr[i-1][j+1]==cofre)){
					arr[i-1][j+1]++;
				}
				if(!(arr[i-1][j-1]==cofre)){
					arr[i-1][j-1]++;
				}
			}
		}	    
	}
	
	//crear tabla del juego dinamicamente

	var table = document.getElementById("tablero");
	for (let i = 0; i < ancho-2; i++) {
		let row = table.insertRow(i);
		for (let j = 0; j < alto-2; j++) {
			row.insertCell(j).innerHTML= 
			"<input type=\"button\" class=\"botonCelda\" onclick=\"descubre(this)\" data-x=\""+(i+1)+"\" data-y=\""+(j+1)+"\"" + " />";
			row.cells[j].classList.add("celda");
		}
	}
}

function descubre(elem) {
	let x = elem.dataset.x * 1; //obtener coordenadas del boton pulsado
	let y = elem.dataset.y * 1;
	var table = document.getElementById("tablero"); 

	elem.style.visibility="hidden";  // ocultar boton

	var celda = table.children[0].children[x-1].children[y-1];

	// de acuerdo al valor descubierto, tomar accion
	switch (arr[x][y]) {
		case 0:	celda.innerText=" ";			// celda vacia, descubrir las vacias contiguas
				descubrirRecursivo(x,y);
				break;
		case 1: celda.innerText=arr[x][y];		// celda con numero 1 y color azul
				celda.classList.add("azul");
				tablero[x][y]="D";
				break;
		case 2: celda.innerText=arr[x][y];		// celda con numero 2 y color verde
				celda.classList.add("verde");
				tablero[x][y]="D";
				break;
		case 3:  
		case 4:  
		case 5:  
		case 6:  
		case 7:  
		case 8: celda.innerText=arr[x][y];		// celda con 3 o mas y color rojo
				celda.classList.add("rojo");
				tablero[x][y]="D";
				break;
		case 9: celda.innerText="$";			// celda con premio de monedas
				tablero[x][y]="9";
				celda.classList.add("gold");
				break;
	}

	calcula_score(x,y);

	for (let i = 0; i < ancho-2; i++) {			// borra los botones contiguos descubiertos
		for (let j = 0; j < alto-2; j++) {
			if (tablero[i+1][j+1]==" ") {
				celda = table.children[0].children[i].children[j];
				celda.innerText=" ";
			}
		}
	}
}

function descubrirRecursivo(Cx, Cy){

	if(tablero[Cx][Cy] == " "){		// la celda ya estaba descubierta, salir
		return;
	}
	if(arr[Cx][Cy]!=0){				// la celda tiene numero, no descubirla y salir
		return;
	}
	if(Cx==ancho-1 || Cx==0|| Cy==alto-1 || Cy==0){	// ya me sali de los bordes del tablero, salir
		return;
	}
	if(arr[Cx][Cy]==0){				// encontre celda vacia, descubrirla y continuar
		tablero[Cx][Cy]=" ";
	}
	
	descubrirRecursivo(Cx,Cy+1);	// llamar a descubrir celdas izq, der, arriba y abajo
	descubrirRecursivo(Cx,Cy-1);
	descubrirRecursivo(Cx-1,Cy);
	descubrirRecursivo(Cx+1,Cy);
	
	// las esquinas hay que revisarlas antes de llamar a descubrirlas
	if(tablero[Cx][Cy+1]==" " || tablero[Cx+1][Cy]==" ")
		descubrirRecursivo(Cx+1,Cy+1);
	if(tablero[Cx+1][Cy]==" " || tablero[Cx][Cy-1]==" ")
		descubrirRecursivo(Cx+1,Cy-1);
	if(tablero[Cx][Cy-1]==" " || tablero[Cx-1][Cy]==" ")
		descubrirRecursivo(Cx-1,Cy-1);
	if(tablero[Cx-1][Cy]==" " || tablero[Cx][Cy+1]==" ")
		descubrirRecursivo(Cx-1,Cy+1);

}

function calcula_score(Sx,Sy) {
	let cofres=numCofres;
	let monedas=0;
	
	for (let i = 1; i < ancho-1; i++) {			// recorrer el tablero
		for (let j = 0; j < alto-1; j++) {
			if (tablero[i][j]=="9") { //encontre cofre descubierto
				cofres--;
				monedas=monedas+20;
				if((tablero[i+1][j+1]=="D")){monedas--;} //descontar 1 moneda por cada celda contigua descubierta
				if((tablero[i  ][j+1]=="D")){monedas--;}
				if((tablero[i-1][j+1]=="D")){monedas--;}
				if((tablero[i+1][j  ]=="D")){monedas--;}
				if((tablero[i-1][j  ]=="D")){monedas--;}
				if((tablero[i+1][j-1]=="D")){monedas--;}
				if((tablero[i  ][j-1]=="D")){monedas--;}
				if((tablero[i-1][j-1]=="D")){monedas--;}
			}
		}
	}
	document.getElementById("cofres").innerText=cofres;   //actualizar score
	document.getElementById("score").innerText=monedas;
	
	if (cofres==0 && monedas>bestScore) {   //actualizar mejor score
		bestScore=monedas;
		document.getElementById("best_score").innerText=monedas;
	}
}	

function generateRandom(min = 0, max = 100) {

    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;

    return rand;
}

function borra_tabla() {
	var x = document.getElementById("tablero").rows.length; 
	for (let i = 0; i < x; i++) {
		document.getElementById("tablero").deleteRow(-1);
	}
	document.getElementById("cofres").innerText="";
	document.getElementById("score").innerText="";

}

/*
las variables que se ocupan dentro de JS son 3: 
var -> que actualmente esta en sustitucion
let -> es una variable "protegida" porque solo funciona dentro de una funcion o metodo 
declarado en un fragmento de codigo
const -> la cual es el valor constante en todo el documento y no puede cambiar su estado
*/
/*
let x = "x";

if(true){

        //declaramos una constante

        const x = "y";
        console.log(x);
}

console.log(x);
*/

//vamos a ver la diferencia entre una funcion y una funcion flecha

//por ejemplo vamos a sumar dos numeros

function sumarFuncionNormal(n1,n2){
    return n1+n2;
}

console.log(`la suma de (3,4): ${sumarFuncionNormal(3,4)}`);

const sumarFuncionFlecha = (n1,n2) => n1+n2;
console.log(`la suma de (5,6): ${sumarFuncionFlecha(5,6)}`);

const razasDePerros=[
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Pitbull",
    "Dalmata",
    "San Bernardo"
];

//con un for normal
for(let indice = 0; indice< razasDePerros.length; indice ++){
    console.log(razasDePerros[indice]);
}

for(const raza of razasDePerros){
    console.log(raza);
}

for(const indice in razasDePerros){
    console.log(razasDePerros[indice]);
}

//forEach es poder iterar sobre elementos del arreglo que no devuelve nada 
razasDePerros.forEach(raza,indice,arregloOriginal => {
 console.log(raza);
})


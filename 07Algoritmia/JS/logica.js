function problema1(){
    var valores = document.getElementById("p1-input").value;
    var split = valores.split(' ').reverse();
    var resultado = '';

    split.forEach(function (palabras, i){

        if(i != 0 || i != split.length) resultado += ' ';
        resultado += palabras;
    });

    document.querySelector('#p1-output').textContent = resultado;
}
function problema2()
{
    //obtener valores de x
    var x1 = document.querySelector('#p2--x1').value;
    var x2 = document.querySelector('#p2--x2').value;
    var x3 = document.querySelector('#p2--x3').value;
    var x4 = document.querySelector('#p2--x4').value;
    var x5 = document.querySelector('#p2--x5').value;
    //obtener valores de y
    var y1 = document.querySelector('#p2--y1').value;
    var y2 = document.querySelector('#p2--y2').value;
    var y3 = document.querySelector('#p2--y3').value;
    var y4 = document.querySelector('#p2--y4').value;
    var y5 = document.querySelector('#p2--y5').value;

    var v1 = [x1, x2, x3, x4, x5];
    var v2 = [y1, y2, y3, y4, y5];

/*El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. 
La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del 
valor del string de acuerdo a su valor Unicode. */
    v1 = v1.sort(function (v1, v2)
    {
        return v2-v1;
    });

    v2 = v2.sort(function (v1, v2)
    {
        return v2-v1;
    });

    var resultado = 0;

    for(var i = 0; i < v1.length; i++)
    {
        resultado += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'El mínimo producto escalar es: '+ resultado;
}
function problema3()
{
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'];
    //obtener la entrada de los datos
    var p3_input= document.querySelector('#p3-input').value;

    //Separar por comas
    var p3_palabras= p3_input.split(',');
    //necesitamos una funcion que se encargue de recuperar cada palabra
    //Eliminar espacios
    p3_palabras=p3_palabras.map(function(palabras)
    {
        return palabras.replace(/\s/g, '').toUpperCase();
    });
     //Calcular los caracteres únicos
    var p3_res='';
    //funcion que se encargue de calcular que contienen el arreglo y seprara para 
    //cada caracter contarlo
   p3_palabras.forEach(function(palabra, i)
   {
    var letras_unicas = [];
    var palabra_array= palabra.split('');

    //iterar el alfabeto
    alfabeto.forEach(function (letra, j)
    {
        //itero cada palabra
        palabra_array.forEach(function(letras_palabras, k)
        {
            //comprobar que la letra este dentro del alfabeto
            if(letras_palabras==letra)
            {
                //si la letra no la hemos contado la agregamos a un array para contar la letras unicas
                if(letras_unicas.indexOf(letra)<0)
                {
                    letras_unicas.push(letra);

                }
            }
        });
    });
    //vammos a contar la salida 
    p3_res+= 'Palabras: ' + palabra + '='+ letras_unicas.length +' \n';
   });
   //imprimir salida
   document.querySelector('#p3-output').textContent =p3_res;
}
function borrar1()
{
    document.querySelector("#p1-output").textContent="";
}
function borrar2()
{
    document.querySelector("#p2-output").textContent="";
    document.getElementById("p2--x1").value="";
    document.getElementById("p2--x2").value="";
    document.getElementById("p2--x3").value="";
    document.getElementById("p2--x4").value="";
    document.getElementById("p2--x5").value="";
    document.getElementById("p2--y1").value="";
    document.getElementById("p2--y2").value="";
    document.getElementById("p2--y3").value="";
    document.getElementById("p2--y4").value="";
    document.getElementById("p2--y5").value="";
}
function borrar3()
{
    document.querySelector("#p3-output").textContent="";
 
}
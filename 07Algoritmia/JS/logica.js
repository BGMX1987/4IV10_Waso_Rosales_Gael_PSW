function problema1(){
    var valores = document.getElementById("p1-input").value;
    var split = valores.split(' ')
    var resultado = '';

	split.reverse();
    split.forEach(function (palabra){
        resultado = resultado+palabra+' ';
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

    v1.sort(function (a,b){return a-b});

    v2.sort(function (a,b){return a-b});
    
    v2 = v2.reverse();

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

    var p3_input= document.querySelector('#p3-input').value;
    var p3_palabras= p3_input.split(',');

    p3_palabras=p3_palabras.map(function(palabra)
    {
        return palabra.replace(/\s/g, '').toUpperCase();
    });
	var num_letras = [];

    p3_palabras.forEach(function(palabra, i)
    {
		var letras_unicas = [];
		var palabra_array= palabra.split('');

		//recorrer alfabeto
		alfabeto.forEach(function (letra, j)
		{
			//recorrer cada palabra
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
		num_letras[i]=letras_unicas.length; // Se guarda el número de letras unicas de cada palabra
   });
   var maximo=num_letras.indexOf(Math.max(...num_letras));  //Se busca el mayor y se obtiene su indice en el arreglo

   document.querySelector('#p3-output').textContent ="La palabra con más letras únicas es: "+p3_palabras[maximo]+" con "+num_letras[maximo];
}
function borrar1()
{
    document.querySelector("#p1-output").textContent="";
    document.getElementById("p1-input").value="";
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
    document.getElementById("p3-input").value="";
 
}
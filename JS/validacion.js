/*
JavaScript es un lenguaje
que posee un paradigma orientado a objetos y a 
funciones, y eventos 
por tal motivo presenta una particularidad que es:

No tipado
no existe int, float, string, ni char, ni nada :(

Todo es var -> variable

de acuerdo0 al estandar ES6 se manejan 3 tipos de variables:

VAR
LET es una variable de tipo "Protected"
CONST es un valor constante

*/

function validar(formulario){
    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar mas de 3 caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    var checarABC= "qwertyuiopasdfghjklñzxcvbnm"+"QWERTYUIOPASDFGHJKLÑZXCVBNM";
    var cadenaNombre=formulario.nombre.value;

    var todoesvalido= true;

    for(var i=0; i<cadenaNombre.length; i++){
        var caracteres=cadenaNombre.charAt(i);
        for(var j=0; j<checarABC.length;j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j==checarABC.length){
            todoesvalido=false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
  
//edad
    var checarABC= "0123456789";
    var cadenaNombre=formulario.edad.value;

    var todoesvalido= true;

    for(var i=0; i<cadenaNombre.length; i++){
        var caracteres=cadenaNombre.charAt(i);
        for(var j=0; j<checarABC.length;j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j==checarABC.length){
            todoesvalido=false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingresa solo numeros en el campo edad");
        formulario.edad.focus();
        return false;
    }

    var edad =parseInt(formulario.edad.value)
    if((edad<0) || (edad >=99)){
        alert("Favor de ingresar una edad valida de entre 01 y 99 años");
        formulario.edad.focus();
        return false;
    }

    //Tarea: Validar Fecha nacimiento

    var fecha=new Date(formulario.fecha.value);   
    var hoy = new Date();            //fecha actual
    var mes = fecha.getMonth() + 1;  //porque enero es 0
    var dia = fecha.getDate();       //dia del mes 

    if(fecha > hoy){
        alert("La fecha de nacimiento es futura");
        formulario.fecha.focus();
        return false;
    }

    if ((mes <1) || (mes>12)){
        alert("El mes de la fecha de nacimiento es invalido");
        formulario.fecha.focus();
        return false;
    }

    if ((dia <1) || (dia>31)){
        alert("El día de la fecha de nacimiento es invalido");
        formulario.fecha.focus();
        return false;
    }

    if ((mes == 2) && (dia>29)){
        alert("No se admite un dia de febrero mayor a 29");
        formulario.fecha.focus();
        return false;
    }

    let milisegundos = (hoy.getTime() - fecha.getTime()); //diferencia entre fecha capturada y fecha actual
    var intervalo= milisegundos/(1000*60*60*24*365);      
    intervalo=Math.trunc(intervalo);     //diferencia en años

    if(intervalo != edad){
        alert("La fecha de nacimiento no corresponde a tu edad");
        formulario.fecha.focus();
        return false;
    }

    //es obtener el campo de correo
    var email=formulario.correo.value;
    //crear expresion regulaar
    
    var prueba="/([Aa-Zz]+[0-9]+\.){10}\@([Aa-Zz]+[0-9]+){8}\.([Aa-Zz]+[0-9]+){3}/g";

    alert("Email " + (prueba.test(email) ? " " : "no ") + "valido")

    return prueba.test;



}
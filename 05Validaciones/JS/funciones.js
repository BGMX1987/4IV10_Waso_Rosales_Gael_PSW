function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron =/[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function f_interes(){

    var valor =document.getElementById("cantidad").value;
    var meses =document.getElementById("meses").value;
    var int_meses= parseInt(meses);
    var int_valor= parseInt(valor);
    var interes= int_valor * 0.082 * int_meses;
    var total = int_valor + interes;
    document.getElementById("cantidadi").value ="$ "+ total;
}

function f_sueldo(){

    var sueldo   = parseInt(document.getElementById("sueldo").value);
    var n_ventas = parseInt(document.getElementById("ventas").value);
    var m_ventas = parseInt(document.getElementById("monto_ventas").value);
	var comision = 0;
	if (n_ventas >= 5) {
		comision = m_ventas * 0.35;
	}
    var total = (sueldo + comision) * 0.88;
    document.getElementById("comision_tot").value ="$ "+ comision;
    document.getElementById("sueldo_tot").value ="$ "+ total;
}

function f_cuenta(){

    const tipos = [];
    const precios = [];
	cuenta_tot = 0;
	
	tipos[1] = document.getElementById("tipo1").value;
	tipos[2] = document.getElementById("tipo2").value;
	tipos[3] = document.getElementById("tipo3").value;
	tipos[4] = document.getElementById("tipo4").value;
	tipos[5] = document.getElementById("tipo5").value;
	
	precios[1] = parseInt(document.getElementById("precio1").value);
	precios[2] = parseInt(document.getElementById("precio2").value);
	precios[3] = parseInt(document.getElementById("precio3").value);
	precios[4] = parseInt(document.getElementById("precio4").value);
	precios[5] = parseInt(document.getElementById("precio5").value);

	for (let i = 1; i < 6; i++) {
        switch (tipos[i]) {
			case "papas" : 
				cuenta_tot = cuenta_tot + precios[i] * 0.98;
				break;
			case "pastelito" : 
				cuenta_tot = cuenta_tot + precios[i] * 0.9;
				break;
			case "lacteo" : 
				cuenta_tot = cuenta_tot + precios[i] * 0.925;
				break;
			default:
				cuenta_tot = cuenta_tot + precios[i];
		}
	}
			
    document.getElementById("cuenta_tot").value ="$ "+ cuenta_tot;
}

function f_califica(){

    var parcial_1 = parseInt(document.getElementById("parcial_1").value);
    var parcial_2 = parseInt(document.getElementById("parcial_2").value);
    var parcial_3 = parseInt(document.getElementById("parcial_3").value);
    var examen    = parseInt(document.getElementById("examen").value);
    var trabajo   = parseInt(document.getElementById("trabajo").value);

	var calif_final = ((parcial_1+parcial_2+parcial_3)/3.0)*0.55;
	calif_final = calif_final + (examen*0.3);
	calif_final = calif_final + (trabajo*0.15);
	
    document.getElementById("calific_final").value = calif_final;
}

function f_porcentajes(){

    var hombres = parseInt(document.getElementById("hombres").value);
    var mujeres = parseInt(document.getElementById("mujeres").value);

	var p_hombres = 100*hombres/(hombres+mujeres);
	var p_mujeres = 100*mujeres/(hombres+mujeres);

    document.getElementById("por_hombre").value = p_hombres + "%";
    document.getElementById("por_mujer").value  = p_mujeres + "%";
}

function f_edad(){

    var nacimiento = new Date( document.getElementById("nacimiento").value + "T00:00");
	var hoy = new Date();
	
    var edad = Math.trunc((hoy - nacimiento) / (1000*60*60*24*365));

    document.getElementById("edad").value = edad + " anios";
}

function f_dos_num(){

    var num_1 = parseInt(document.getElementById("num_1").value);
	var num_2 = parseInt(document.getElementById("num_2").value);
	var resultado = 0;
	
	if (num_1 == num_2) {
		resultado = num_1 * num_2;
	}
	if (num_1 > num_2) {
		resultado = num_1 ** num_2;
	}
	if (num_1 < num_2 && num_2 != 0) {
		resultado = num_1 / num_2;
	}

    document.getElementById("resultado").value = resultado;
}

function f_tres_num(){

    const tres = [];
    tres[0] = parseInt(document.getElementById("nume_1").value);
	tres[1] = parseInt(document.getElementById("nume_2").value);
	tres[2] = parseInt(document.getElementById("nume_3").value);
	
    document.getElementById("mayor").value = Math.max.apply(null, tres);
}

function f_extras(){

    var horas_tot   = parseInt(document.getElementById("horas_tot").value);
    var costo_hora  = parseInt(document.getElementById("costo_hora").value);
	var horas_41_a_48 = 0;
	var horas_49_y_mas = 0;
	
	if (horas_tot > 40 ) { 
		horas_41_a_48 = horas_tot -40;
		
		if (horas_41_a_48 > 8) {
			horas_49_y_mas = horas_41_a_48 - 8;
			horas_41_a_48 = 8;
		}
	}
	
	tot_extra = (horas_41_a_48 * 2 * costo_hora) + (horas_49_y_mas * 3 * costo_hora) ;
	
    document.getElementById("monto_extra").value = tot_extra;
}

function f_utilidades(){

    var antiguedad  = parseInt(document.getElementById("antiguo").value);
    var sueldo      = parseInt(document.getElementById("sueldo_mes").value);
	var porcentaje  = 0;

	switch(antiguedad) {
		case 0: porcentaje = 5;
				break;
		case 1: porcentaje = 7;
				break;
		case 2:
		case 3:
		case 4: porcentaje = 10;
				break;
		case 5:
		case 6:
		case 7:
		case 8:
		case 9: porcentaje = 15;
				break;
		default: porcentaje = 20;
	}
	var utilidad = sueldo * (porcentaje/100);
	
    document.getElementById("utilidades").value = "$ "+ utilidad;
}

function borrard(){

    document.getElementById("formulario1").reset();
    document.getElementById("formulario2").reset();
    document.getElementById("formulario3").reset();
    document.getElementById("formulario4").reset();
    document.getElementById("formulario5").reset();
    document.getElementById("formulario6").reset();
    document.getElementById("formulario7").reset();
    document.getElementById("formulario8").reset();
    document.getElementById("formulario9").reset();
    document.getElementById("formulario10").reset();
    
}
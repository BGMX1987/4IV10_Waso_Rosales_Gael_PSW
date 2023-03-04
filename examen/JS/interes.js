function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron =/[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function redondeo(n) {    
    return Math.round(n*100)/100;
}

function borra_tabla() {
	var x = document.getElementById("tableData").rows.length; 
	for (let i = 1; i < x; i++) {
		document.getElementById("tableData").deleteRow(-1);
	}
}

function f_interes(){

    var prestamo = document.getElementById("prestamo").value;
    var interes  = document.getElementById("interes").value;
	var plazo    = document.getElementById("plazo").value;

    var p = parseInt(prestamo);
    var i = parseInt(interes)/100;
    var n = parseInt(plazo);
	var m = 12;
	
    var cuota = [p*(i/m)*(1 + i/m)**(n*m)] / [(1 + i/m)**(n*m) - 1];
	
	var table = document.getElementById("tableData");
	var rowCount  = 0;
	saldo_inicial = p;
	borra_tabla();
	
	for (let j = 1; j <= n*m; j++) {
		
		m_interes     = saldo_inicial * i/m;
		abono_capital = cuota - m_interes;
		saldo_final   = saldo_inicial - abono_capital;
		
		rowCount = table.rows.length;
		var row = table.insertRow(rowCount);
		row.insertCell(0).innerHTML = j;
		row.insertCell(1).innerHTML = "$ "+ redondeo(cuota);
		row.insertCell(2).innerHTML = "$ "+ redondeo(m_interes);
		row.insertCell(3).innerHTML = "$ "+ redondeo(abono_capital);
		row.insertCell(4).innerHTML = "$ "+ redondeo(saldo_inicial);
		row.insertCell(5).innerHTML = "$ "+ redondeo(saldo_final);

		saldo_inicial = saldo_final;
	}
}




const expresion = {
    prestamo : /^\d/, 
    interes : /^\d/, 
    plazo : /^\d{1}$|^\d{2}/
}








function validar(prestamo,interes, plazo){
    if(prestamo >=1 || prestamo <1000000){
        if(interes>=1 || interes <=100){
            if (plazo >=1 || plazo <=20){
                if ((expresion.prestamo.test(prestamo))  && expresion.interes.test(interes)&& expresion.plazo.test(plazo)){ 

                    f_interes();

                }   
            }else{
                alert("Ingrese entre 1 y 10 años");
            }
        }else{
            alert("Ingrese un interes entre entero entre 1 y 100");
        }
    }else{
        alert("Ingrese una cantidad entre $1 y $1000000");
    } 
}






function borrard(){

    document.getElementById("formulario1").reset();
	borra_tabla();
    
}

var operacion = ' ';
var resultado = ' ';

function enviarNumero(calcular) {
		alert("Usted Seleciono Un Numero:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function enviarSigno(calcular) {
		alert("Usted seleciono un signo:   "+calcular);
		operacion = operacion + calcular;
		inserteTesxto();
}



function igual() {
		resultado=eval(operacion);
		alert("El resultado de la operacion final es:   "+resultado)
	operacionFinal(resultado);
}

function borrar() {
	operacion='';
	resultado='';
	document.getElementById("total").innerHTML="";
}



function insertetesxto(){
	document.getElementById("total").innerHTML=operacion;
}



function operacionFinal(calcular){
	document.getElementById("total").innerHTML=operacion+"="+resultado;

}
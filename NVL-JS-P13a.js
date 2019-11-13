function primos(n){
	
	var numero_de_primos_calculados = 1;
	var cont = 1;
	var listaPrimos = [];

	while (numero_de_primos_calculados <= n) {

		if(isPrimo(cont)){
			numero_de_primos_calculados = numero_de_primos_calculados + 1
			listaPrimos.push(cont)
		}
		cont = cont + 1;
	}

	return listaPrimos;
}	

function isPrimo(numero){
	if(numero == 1) {
		return true;
	}
	for (var i = 2; i < numero; i++){
		if (numero % i === 0){
			return false;
		}
		}
		return numero !== 1;
	}

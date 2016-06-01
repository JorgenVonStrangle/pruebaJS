document.formulario.addEventListener('submit', validar);

function validar(evObject){
	var arreglo=["algo", "manzana", 12, "23", "algo_mas"];	
	recibe(arreglo);
	document.formulario.submit();
}


	function recibe(ar){
		var i=(ar.length);
		var copy=[];
		for (; i>=0; i--){
			copy[i]=ar[i];
		}
		console.log('El arreglo ha sido copiado, estos son los valores de copy[]: ');
		for (; i>=0; i--){
			console.log(anotherArray[i]);
		}

		
	}

















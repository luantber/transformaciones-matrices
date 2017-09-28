function size(mat){
	m = mat.length;
	n = mat[0].length;

	return [m,n];
}

function llenado(m,p) {
	matriz = new Array(m);
	for (var i = 0; i < m; i++) {
		matriz[i] = new Array(p);
	 } 

	 for (var i = 0; i < m; i++) {
	 	for (var j = 0; j < p; j++) {
	 		matriz[i][j] =0;
	 	}
	 }
	return matriz;
}


function multiplicacion(mat1,mat2) {
	if (mat1[0].length != mat2.length) {
		console.log("No se puede realizar esta operacion");
	}
	else{
		console.log("Esta operacíon si ");
		matrx = llenado(mat1.length,size(mat2)[1]);
		
		for (var i = 0; i < mat1.length; i++) {
			for (var j = 0; j < mat2[0].length; j++) {
				for (var k = 0; k < mat2.length; k++) {
					matrx[i][j] = matrx[i][j] + math.eval(mat1[i][k]) * mat2[k][j] ;
				}
			}
		}
		return matrx;
	}
}

/*
var a = [[2,0],[3,0]];
var b = [[1],[2]];
matFinal = multiplicacion(a,b)
console.log(matFinal);

*/

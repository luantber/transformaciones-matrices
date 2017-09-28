var app = new Vue({
  el: '#main',
  data: {
    mat: [ [1,1] , [1,1] ],
    punto: [ [1] , [1] ] ,
    puntos: [],
    puntos2 : []
  },
  methods: {
    addPunto: function () {
    	var nuevo = JSON.stringify(this.punto);
    	this.puntos.push(JSON.parse(nuevo ) );

    },

    ejecutar: function() {
    	this.puntos2 = [];
    	for (var i = 0; i < this.puntos.length; i++) {
    		this.puntos2.push(multiplicacion(this.mat, this.puntos[i]));
    	}

		for (var i = 0; i < this.puntos.length; i++) {
    		TESTER = document.getElementById('tester');
		Plotly.plot( TESTER, [{
		x: [0, this.puntos[i][0][0]],
		y: [ 0, this.puntos[i][1][0]] }], {
		margin: { t: 0 } } );
    	}
		
    	for (var i = 0; i < this.puntos2.length; i++) {
    		TESTER = document.getElementById('tester2');
		Plotly.plot( TESTER, [{
		x: [0, this.puntos2[i][0][0]],
		y: [ 0, this.puntos2[i][1][0]] }], {
		margin: { t: 0 } } );
    	}
		},

    reset: function(){
    	this.puntos2 = [];
    	this.puntos = [];
    }
  }
 });
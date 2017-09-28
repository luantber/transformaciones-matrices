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

            
            var mix = new Array();
            var miy = new Array();
    		for (var i = 0; i < this.puntos.length; i++) {
                mix.push(this.puntos[i][0][0]);
                miy.push(this.puntos[i][1][0]);
            }
            var myPlot2 = document.getElementById('tester'),
            x = mix,
            y = miy,
            data = [{x:x, y:y, type:'scatter',
                     mode:'markers', marker:{size:10}
                    }],
            layout = {hovermode:'closest',
                        xaxis:{range:[-3,15]},
                        yaxis:{range:[-3,15]}
        
             };
            Plotly.newPlot('tester', data, layout);

            var mix2 = new Array();
            var miy2 = new Array();

        	for (var i = 0; i < this.puntos2.length; i++) {
                mix2.push(this.puntos2[i][0][0]);
                miy2.push(this.puntos2[i][1][0]);
        	}
            var myPlot = document.getElementById('tester2'),
            x = mix2,
            y = miy2,
            data = [{x:x, y:y, type:'scatter',
                     mode:'markers', marker:{size:10}
                    }],
            layout = {hovermode:'closest',
                        xaxis:{range:[-3,15]},
                        yaxis:{range:[-3,15]}
        
             };
            Plotly.newPlot('tester2', data, layout);

		},

    reset: function(){
    	this.puntos2 = [];
    	this.puntos = [];
    }
  }
 });
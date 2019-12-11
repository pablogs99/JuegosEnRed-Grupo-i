$(document).ready(function(){
	

})
function controladorHistorial(){
	this.actual ="----"
	this.historia1 = "";
	this.historia2 = "";
	this.historia3 = "";
	this.historia4 = "";
	
	this.separar = function(){
		this.historia1 = this.actual.substr(0,3);
		this.historia2 = this.actual.substr(4,3);
		this.historia3 = this.actual.substr(8,3);
		this.historia4 = this.actual.substr(12,3);
	}
	
	
}

actualizarHistorial = function(){
		
		$.ajax({
		url:"/historial/"
			}).done(function(data) {
		controladorHistorial.actual = "" + data; 
		console.log(controladorHistorial.actual);
		
		
		});
	}
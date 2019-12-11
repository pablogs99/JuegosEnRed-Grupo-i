package I.juegosEnRed;

import org.springframework.stereotype.Component;

@Component
public class Historial {
	private String[] Historias = new String[4];
	
	public Historial(){
		Historias[0] = "";
		Historias[1] = "";
		Historias[2] = "";
		Historias[3] = "";
	}
	
	public void actualizarHistorial(String nuevo){
		Historias[3] = Historias[2];
		Historias[2] = Historias[1];
		Historias[1] = Historias[0];
		Historias[0] = nuevo;
	}
	
	public String devolverHistorial() {
		return Historias[0] + "-" + Historias[1] + "-"+ Historias[2] + "-"+ Historias[3] + "-";
	}
	

}


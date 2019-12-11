package I.juegosEnRed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/historial")
public class AppController {
	
	@Autowired
	public Historial historial;
	
	@GetMapping("/")
	public String getHistorial() {
		return historial.devolverHistorial();
	}
	
	@PostMapping("/{nuevo}")
	@ResponseStatus(HttpStatus.CREATED)
	public String nuevaHistoria(@PathVariable String nuevo) {
		historial.actualizarHistorial(nuevo);
		return nuevo;
	}
	
}

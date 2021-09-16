package com.inventario.vacunacion.controladores;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventario.vacunacion.modelos.Personal;
import com.inventario.vacunacion.servicios.PersonalServicios;

@RestController
@RequestMapping ("/personal")
public class PersonalControladores {
	
	@Autowired
	private PersonalServicios personalControladores;
	
	@GetMapping
	private List<Personal> listar(){
		return personalControladores.findAll();
	}
	
	@PostMapping
	public void insertar (@RequestBody Personal empleado){		
		personalControladores.save(empleado);			
	}
	
	@PutMapping
	public void modificar (@RequestBody Personal empleado){		
		personalControladores.save(empleado);			
	}
	
	@DeleteMapping(value="/{id}")
	public void eliminar (@PathVariable("id") Long id){		
		personalControladores.deleteById(id);			
	}
	

}

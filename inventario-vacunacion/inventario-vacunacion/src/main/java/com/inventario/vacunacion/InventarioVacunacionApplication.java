package com.inventario.vacunacion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class InventarioVacunacionApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventarioVacunacionApplication.class, args);
	}

}

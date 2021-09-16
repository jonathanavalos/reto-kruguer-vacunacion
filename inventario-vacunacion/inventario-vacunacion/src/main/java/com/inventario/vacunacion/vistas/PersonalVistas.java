package com.inventario.vacunacion.vistas;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inventario.vacunacion.modelos.Personal;

public interface PersonalVistas extends JpaRepository<Personal, Long>{

}

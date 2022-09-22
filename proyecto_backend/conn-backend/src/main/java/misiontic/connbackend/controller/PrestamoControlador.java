package misiontic.connbackend.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import misiontic.connbackend.model.Prestamo;
import misiontic.connbackend.service.PrestamoService;

@RestController
@RequestMapping("/prestamo")
public class PrestamoControlador {
    
    @Autowired
    PrestamoService prestamoService;

    @GetMapping()
    public ArrayList<Prestamo> obtenerPrestamos(){
        return prestamoService.obtenerPrestamos();
    }


    /*con esta sentencia se puede crear y actualizar prestamos
    para crear nuevo usuario se pasa sin id para actualizar se
    pone el id*/
    @PostMapping()
    public Prestamo guardarPrestamo(@RequestBody Prestamo prestamo){
        return this.prestamoService.guardarPrestamo(prestamo);
    }

   
}

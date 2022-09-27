package misiontic.connbackend.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping(path="/{id}")
    public Optional<Prestamo> obtenerPorIdPrestamo(@PathVariable("id")Integer id){
        return this.prestamoService.obtenerPorIdPrestamo(id);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Integer id){
        boolean ok = this.prestamoService.eliminarPrestamo(id);
        if(ok){
            return "Se elimino el prestamo con id: " +id;
        }else{
            return "No se pudo eliminar el prestamo con id " +id;
        }
    }



   
}

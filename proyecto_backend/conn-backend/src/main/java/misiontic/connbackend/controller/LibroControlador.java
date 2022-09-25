package misiontic.connbackend.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import misiontic.connbackend.model.Libro;
import misiontic.connbackend.service.LibroService;

@RestController
@RequestMapping("/libro")
public class LibroControlador {

    @Autowired
    LibroService libroService;

    @GetMapping()
    public ArrayList<Libro> obtenerLibros(){
        return libroService.obtenerLibros();
    }

    @PostMapping()
    public Libro guardarLibro(@RequestBody Libro libro){
        return this.libroService.guardaLibro(libro);
    }

    
    
}

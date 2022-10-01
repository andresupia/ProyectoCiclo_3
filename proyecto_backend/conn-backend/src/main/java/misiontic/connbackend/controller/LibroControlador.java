package misiontic.connbackend.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import misiontic.connbackend.enums.Categoria;
import misiontic.connbackend.model.Libro;
import misiontic.connbackend.service.LibroService;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
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
        return this.libroService.guardarLibro(libro);
    }

    @GetMapping(path = "/{id}")
    public Optional<Libro> obtenerPorIdLibro(@PathVariable("id")Integer id){
        return this.libroService.obtenerPorIdLibro(id);
    }

    @GetMapping("/query")
    public ArrayList<Libro> obtenerLibroPorPrioridad(@RequestParam("categoriaLbr") Categoria categoriaLbr){
        return this.libroService.obtenerPorCategoriaLbr(categoriaLbr);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Integer id){
        boolean ok = this.libroService.eliminarLibro(id);
        if(ok){
            return "Se elimino el libro con id: " +id;
        }else{
            return "No se pudo eliminar el libro con id " +id;
        }
    }

    
    
}

package misiontic.connbackend.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misiontic.connbackend.model.Libro;
import misiontic.connbackend.repository.LibroRepository;

@Service
public class LibroService {
    @Autowired
    LibroRepository libroRepository;

    public ArrayList<Libro> obtenerLibros(){
        return (ArrayList<Libro>) libroRepository.findAll();
    }

    public Libro guardaLibro(Libro libro){
        return libroRepository.save(libro);
    }

}

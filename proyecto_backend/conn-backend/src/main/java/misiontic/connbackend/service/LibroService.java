package misiontic.connbackend.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misiontic.connbackend.enums.Categoria;
import misiontic.connbackend.model.Libro;
import misiontic.connbackend.repository.LibroRepository;

@Service
public class LibroService {
    @Autowired
    LibroRepository libroRepository;

    public ArrayList<Libro> obtenerLibros(){
        return (ArrayList<Libro>) libroRepository.findAll();
    }

    public Libro guardarLibro(Libro libro){
        return libroRepository.save(libro);
    }

    public boolean eliminarLibro(Integer id){
        try{
            libroRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

    public Optional<Libro> obtenerPorIdLibro (Integer id){
        return libroRepository.findById(id);
    }

    public ArrayList<Libro> obtenerPorCategoriaLbr(Categoria categoriaLbr){
        return libroRepository.findByCategoriaLbr(categoriaLbr);
    }



}

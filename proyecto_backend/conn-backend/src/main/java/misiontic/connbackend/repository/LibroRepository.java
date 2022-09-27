package misiontic.connbackend.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import misiontic.connbackend.enums.Categoria;
import misiontic.connbackend.model.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro,Integer> {
    public abstract ArrayList<Libro> findByCategoriaLbr(Categoria categoriaLbr);
    
}

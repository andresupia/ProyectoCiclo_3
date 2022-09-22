package misiontic.connbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import misiontic.connbackend.model.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro,Integer> {
    
}

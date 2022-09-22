package misiontic.connbackend.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import misiontic.connbackend.model.Prestamo;

@Repository
public interface PrestamoRepository extends JpaRepository<Prestamo,LocalDate>{
    
}

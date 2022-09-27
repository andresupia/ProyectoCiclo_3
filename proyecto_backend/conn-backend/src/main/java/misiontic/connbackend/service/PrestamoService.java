package misiontic.connbackend.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misiontic.connbackend.model.Prestamo;
import misiontic.connbackend.repository.PrestamoRepository;

@Service
public class PrestamoService {
    @Autowired
    PrestamoRepository prestamoRepository;

    public ArrayList<Prestamo> obtenerPrestamos(){
        return (ArrayList<Prestamo>) prestamoRepository.findAll();
    }

    public Prestamo guardarPrestamo(Prestamo prestamo){
        return prestamoRepository.save(prestamo);
    }

    public boolean eliminarPrestamo(Integer id){
        try{
            prestamoRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

    public Optional<Prestamo> obtenerPorIdPrestamo(Integer id){
        return prestamoRepository.findById(id);
    }

}

package misiontic.connbackend.repository;


import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import misiontic.connbackend.enums.Tipos;
import misiontic.connbackend.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Integer>{
    public abstract ArrayList<Usuario> findByTipoUsr(Tipos tipoUsr);
}

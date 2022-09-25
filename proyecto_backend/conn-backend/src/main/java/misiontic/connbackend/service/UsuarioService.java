package misiontic.connbackend.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import misiontic.connbackend.enums.Tipos;
import misiontic.connbackend.model.Usuario;
import misiontic.connbackend.repository.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public ArrayList<Usuario> obtenerUsuarios(){
        return (ArrayList<Usuario>) usuarioRepository.findAll();
    }

    public Usuario guardarUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> obtenerPorIdCedula(Integer id){
        return usuarioRepository.findById(id);
    }

    public ArrayList<Usuario> obtenerPorTipoUsr(Tipos tipoUsr){
        return usuarioRepository.findByTipoUsr(tipoUsr);
    }

    public boolean eliminarUsuario(Integer id){
        try{
            usuarioRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

}

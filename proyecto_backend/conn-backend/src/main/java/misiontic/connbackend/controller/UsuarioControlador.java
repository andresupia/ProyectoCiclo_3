package misiontic.connbackend.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import misiontic.connbackend.enums.Tipos;
import misiontic.connbackend.model.Usuario;
import misiontic.connbackend.service.UsuarioService;

@CrossOrigin(origins = "http://127.0.0.1:5500/")
@RestController
@RequestMapping("/usuario")
public class UsuarioControlador {
    @Autowired
    UsuarioService usuarioService;

    @GetMapping()
    public ArrayList<Usuario> obtenerUsuarios(){
        return usuarioService.obtenerUsuarios();
    }

    @PostMapping()
    public Usuario guardaUsuario(@RequestBody Usuario usuario){
        return this.usuarioService.guardarUsuario(usuario);
    }

    @GetMapping(path = "/{id}")
    public Optional<Usuario> obtenerPorIdCedula(@PathVariable("id")Integer id){
        return this.usuarioService.obtenerPorIdCedula(id);
    }

    @GetMapping("/query")
    public ArrayList<Usuario> obtenerUsuarioPorPrioridad(@RequestParam("tipoUsr") Tipos tipoUsr){
        return this.usuarioService.obtenerPorTipoUsr(tipoUsr);
    }

    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id")Integer id){
        boolean ok = this.usuarioService.eliminarUsuario(id);
        if(ok){
            return "Se elimino el usuario con id " + id;
        }else{
            return "No pudo eliminar el usuario con id "+ id;
        }
    }



    

}

package misiontic.connbackend.model;

import javax.persistence.*;
import javax.validation.constraints.Email;

import lombok.Data;
import misiontic.connbackend.enums.Tipos;

@Data
@Entity
@Table(name = "usuario")
public class Usuario {
    
    
    @Id    
    @Column(unique = true,nullable = false)
    private Integer idcedula_usr;
    @Column(nullable = false, length = 50)
    private String alias_usr;
    @Column(nullable = false, length = 50)
    private String contrasena_usr;
    @Email
    @Column(nullable = false, length = 50, unique = true)
    private String correo_usr;
    @Column(nullable = false, length = 50)
    private String nombres_usr;
    @Column(nullable = true, length = 50)
    private String apellidos_usr;
    @Column(nullable = true, length = 50)        
    private String direccion_usr;
    @Column(nullable = false, length = 50)
    private String telefono_usr;
    
    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false, length = 11)
    private Tipos tipoUsr;


    



}

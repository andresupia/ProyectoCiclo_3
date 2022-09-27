package misiontic.connbackend.model;

import lombok.*;
import misiontic.connbackend.enums.Categoria;

import javax.persistence.*;



@Data
@Entity
@Table(name="libro")
public class Libro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false, length = 20)    
    private Integer idlibro_lbr;

    @Column(nullable = false, length = 50, unique = true)
    private String titulo_lbr;
    @Column(nullable = true, length = 50)
    private String editorial_lbr;
    @Column(nullable = true, length = 50)
    private String autor_lbr;
    @Column(nullable = true, length = 50)
    private String edicion_lbr;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false, length = 11)    
    private Categoria categoriaLbr; 
    
    private Integer disponible_lbr;       
    private Integer copiasdisp_lbr;


}

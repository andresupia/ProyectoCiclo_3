package misiontic.connbackend.model;

import java.sql.Date;

import javax.persistence.*;

import org.springframework.data.annotation.CreatedDate;

import lombok.Data;

@Data
@Entity
@Table(name = "prestamo")
public class Prestamo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false, length = 20)    
    private Integer idPrestamo;
    @CreatedDate
    private Date fechaCreacion;
    @CreatedDate
    private Date fechaActualizacion;
    @ManyToOne
    @JoinColumn(name = "idlibro_lbr")
    private Libro fkLibro;
    @ManyToOne
    @JoinColumn(name = "idcedula_lbr")
    private Usuario fkUsuario;


}

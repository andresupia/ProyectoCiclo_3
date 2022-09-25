package misiontic.connbackend.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;

import lombok.Data;

@Data
@Entity
@Table(name = "prestamo")
public class Prestamo {
    @Id
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

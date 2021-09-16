package com.inventario.vacunacion.modelos;
import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table (name = "personal")

public class Personal {
	
	private int ci;
	private String nombres;
	private String apellidos;
	private String email;
	private Date fech_nac;
	private String dir;
	private int tel_mov;
	private String est_vac;
	private String tip_vac;
	private Date fech_vac;
	private int num_dosis;
	
	
	public Personal(int ci, String nombres, String apellidos, String email, Date fech_nac, String dir, int tel_mov,
			String est_vac, String tip_vac, Date fech_vac, int num_dosis) {
		super();
		this.ci = ci;
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.email = email;
		this.fech_nac = fech_nac;
		this.dir = dir;
		this.tel_mov = tel_mov;
		this.est_vac = est_vac;
		this.tip_vac = tip_vac;
		this.fech_vac = fech_vac;
		this.num_dosis = num_dosis;
	}
	
	public Personal() {
		
	}
	
	public int getCi() {
		return ci;
	}
	public void setCi(int ci) {
		this.ci = ci;
	}
	public String getNombres() {
		return nombres;
	}
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getFech_nac() {
		return fech_nac;
	}
	public void setFech_nac(Date fech_nac) {
		this.fech_nac = fech_nac;
	}
	public String getDir() {
		return dir;
	}
	public void setDir(String dir) {
		this.dir = dir;
	}
	public int getTel_mov() {
		return tel_mov;
	}
	public void setTel_mov(int tel_mov) {
		this.tel_mov = tel_mov;
	}
	public String getEst_vac() {
		return est_vac;
	}
	public void setEst_vac(String est_vac) {
		this.est_vac = est_vac;
	}
	public String getTip_vac() {
		return tip_vac;
	}
	public void setTip_vac(String tip_vac) {
		this.tip_vac = tip_vac;
	}
	public Date getFech_vac() {
		return fech_vac;
	}
	public void setFech_vac(Date fech_vac) {
		this.fech_vac = fech_vac;
	}
	public int getNum_dosis() {
		return num_dosis;
	}
	public void setNum_dosis(int num_dosis) {
		this.num_dosis = num_dosis;
	}
	
	

}

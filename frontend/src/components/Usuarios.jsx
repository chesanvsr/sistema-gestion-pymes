import React, { useState, useEffect } from "react";
import { usuariosService } from "../services/usuarios.service";




function Usuarios() {
  const tituloPagina = "Usuarios JWT (solo para jefes)";
  const [usuarios, setUsuarios] = useState(null);


  // cargar al iniciar el componente, solo una vez
  useEffect(() => {
    BuscarUsuarios();
  }, []);


  async function BuscarUsuarios() {
     try {
      let data = await usuariosService.Buscar();
      setUsuarios(data);
    } catch (error) {
      console.log("error al buscar datos en el servidor!")
    }
  }




  return (
    <>
      <div className="tituloPagina">{tituloPagina}</div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th style={{ width: "20%" }}>IdUsuario</th>
            <th style={{ width: "50%" }}>Nombre</th>
            <th style={{ width: "30%" }}>Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios &&
            usuarios.map((item) => (
              <tr key={item.IdUsuario}>
                <td>{item.IdUsuario}</td>
                <td>{item.Nombre}</td>
                <td>{item.Rol}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
Usuarios.NombreComponenteNoOfuscado = "Usuarios";
export { Usuarios };


import React, {useEffect, useState} from "react";

const Usuario = () =>{

  const [nameUser, setNameUser] = useState("")
  const [terminoContrato, setTerminoContrato] = useState(false)

  const handleUser = (evento) => {
    //Dónde está en el evento lo que viene escrito ?
    //Por el usuario desde el inut de texto
    //evento.target.value
    setNameUser(evento.target.value)


  }

  const handleTerminos = () =>{
    setTerminoContrato(!terminoContrato)
  }

  return(
    <>
      <h1>Usuario</h1>
      <label>Indique un nombre de usuario</label><br/>
      <input type="text" name="usuario" placeholder="Por ejem: Santiago" onChange={handleUser} /><br/><br/>
      {
        nameUser == "nombreError" && 
          <p>YA EXISTE ESE USUARIO</p>
      }<br/>

      <input type="checkbox" name="terminos" checked={terminoContrato} onChange={handleTerminos}/>
      <label htmlFor="terminos">Acepto os términos de contrato</label><br/><br/>
      <button type="button">Guardar nombre de Usuario</button>

    </>
  )
}

export default Usuario
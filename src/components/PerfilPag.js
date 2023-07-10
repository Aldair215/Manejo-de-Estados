import React, { useEffect, useState} from "react";
import {Link} from "react-router-dom"




const PerfilPag = () => {

  //contadorLikes
  const [contadorLikes,setContadorLikes] = useState(0)
  //const [nombre, setNombre] = useState("")
  //conts [activo, setActivo] = useState(false)

  //Cómo se lee un estado? console.log(contadorLikes)
  //Cómo se cambia el valor de un estado? setContadorLikes(12)
  const handleContador = () => {
    setContadorLikes(contadorLikes+1)
  } 
  

  return (
    <>
      <h1>Página de Inicio</h1>
      <p> Hasta Pronto</p>
      <div>
        <a href="/">Ir a Perfil 1</a>
        <Link to="/">Ir a Inicio</Link>
      </div><br/>
      <button type="button" onClick={handleContador}>Dar Like</button>
      <p>Conteo de Liker: {contadorLikes}</p>
    </>
  )
}

export default PerfilPag;
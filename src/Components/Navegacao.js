import React from 'react'
import { NavLink } from 'react-router-dom'

let linkCorrente = {
  color: "#027399"
}

const Navegacao = () => {
  return (

      <ul>
        <li><NavLink exact activstyle={linkCorrente} to={"/"}>Home</NavLink></li>
        <li><NavLink exact activestyle={linkCorrente} to={"/frontend"}>FrontEnd</NavLink></li>
        <li><NavLink exact activestyle={linkCorrente} to={"/programacao"}>Programação</NavLink></li>
        <li><NavLink exact activestyle={linkCorrente} to={"/design"}>Design</NavLink></li>
        <li><NavLink exact activestyle={linkCorrente} to={"/catalogo"}>Catálogo</NavLink></li>
      </ul>

  )
}

export default Navegacao

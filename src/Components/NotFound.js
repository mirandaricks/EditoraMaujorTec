import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='principal'>
      <h2>404!</h2>
      <p>
        Página não encontrada ou removida. <Link to={"/"}>Retornar para Página Inicial</Link>
      </p>
    </main>
  )
}

export default NotFound

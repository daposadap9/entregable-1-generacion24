import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button onClick={handleNewQuote}><img src="/images/boton.png" alt="" /></button>
  )
}

export default Button
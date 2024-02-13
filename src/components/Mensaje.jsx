/* eslint-disable react/prop-types */
//import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje

/* eslint-disable react/prop-types */
import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto
}) => {
    const [mensaje, setMensaje] = useState("")
   

    const handlePresupuesto = (e) =>{
        e.preventDefault();
        if(!presupuesto || presupuesto < 0){
            setMensaje("No es un presupuesto valido")
            setPresupuesto(0)
            return
        }

        setMensaje("")
        setIsValidPresupuesto(true)
    }

  return (
    <div className="contenedor-presupuesto sombra">
      <form onSubmit={handlePresupuesto} className="formulario" >
        <div className="campo">
            <label htmlFor=""></label>

            <input 
                className="nuevo-presupuesto"
                type="number"
                placeholder="Añade tu presupuesto"
                value={presupuesto}
                onChange={e =>{
                    setPresupuesto(Number(e.target.value)) 
                }}
            />
        </div>
        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>

    </div>
  )
}

export default NuevoPresupuesto

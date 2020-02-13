import React from 'react';
import './tabla.css'; 

const Tabla = props => {
    return (
            <tr className= "border-table">
                <td>{props.producto}</td>
                <td>{props.marca}</td>
                <td>{props.cantidad}</td>
                <td>{props.precio}</td>
            </tr>
    )
}

export default Tabla;
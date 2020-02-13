import React from 'react';
import './producto.css';
import Agregar from '../../components/agregar/agregar.js'
import Lista from '../../components/lista/lista.js'

const Producto = () => {
    return (
        <div className="modulos">
            <Agregar></Agregar>
            <Lista></Lista>

        </div>
    )
}



/* <h1>Carrito de Compras</h1>
<h2>Crear tu producto:</h2>
<form>
    <label for="name">Producto</label>
    <input type="text" id="name" maxlength="50" required></input>
    <label>Cantidad</label>
    <input type="text" pattern="[0-9 -]+" required></input>
    <label for="price">Precio</label>
    <input type="text" id="price" pattern="[0-9 -]+" required></input>
    <button>Agregar</button>
</form>
<div>
    <h2>Productos que agregaste:</h2>
    <div>
        <label for="name">Producto:</label>
        <span>Shampoo</span>
        <label>Cantidad:
        </label>
        <span>1</span>
        <label>Precio:</label>
        <span>255</span>
    </div>

</div>*/

export default Producto;
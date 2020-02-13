import React from 'react';
import './agregar.css';

const Agregar = () => {
    return (
        <div className="add-item">
            <h1>Agrega un producto</h1>
            <label for="name">Producto</label>
            <input type="text" id="name" maxlength="50" required></input>
            <label for="brand">Marca</label>
            <input type="text" maxlength="50" required></input>
            <label>Cantidad</label>
            <input type="text" pattern="[0-9 -]+" required></input>
            <label for="price">Precio</label>
            <input type="text" id="price" pattern="[0-9 -]+" required></input>
            <button>Agregar</button>
        </div>
    )
}

export default Agregar;
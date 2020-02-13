import React from 'react';
import './lista.css';
import Tabla from '../../components/tabla/tabla.js'


const products = [
    {
        producto: 'Shampoo',
        marca: "Dove",
        cantidad: "3",
        precio: "300"
    },

    {
        producto: 'Harina',
        marca: "Pan",
        cantidad: "1",
        precio: "50"
    },
    {
        producto: 'Cereal',
        marca: "Zucaritas",
        cantidad: "2",
        precio: "60"
    },
    {
        producto: 'Jugo',
        marca: "Cepita",
        cantidad: "2",
        precio: "10"
    },
    {
        producto: 'Chocolate',
        marca: "Snickers",
        cantidad: "3",
        precio: "30"
    }]


const Lista = (props) => {
    return (
        <div>
            <table className="table">
                <th>Producto</th>
                <th>Marca</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <Tabla producto={products.nombre} marca={products.brand} cantidad={products.quantity} precio={products.price}></Tabla>
                {products.map(card =>
                    <Tabla {...card}></Tabla>
                )}

            </table>
        </div>
    )
}

export default Lista;

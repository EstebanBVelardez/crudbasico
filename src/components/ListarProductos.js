import React from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import ItemProductos from './ItemProductos';

const ListarProductos = (props) => {
    return (
        <Container>
            <h1 className='text-center my-5'>Lista de productos</h1>
            <ListGroup className='my-5'>
                {
                    props.productos.map((producto)=> <ItemProductos producto={producto} key={producto.id}></ItemProductos>)
                }
</ListGroup>
        </Container>
    );
};

export default ListarProductos;
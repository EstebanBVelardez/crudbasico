import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';


const ItemProductos = (props) => {
    return (
        <div>
              <ListGroup.Item className='d-flex justify-content-between'>
                  <p>
    {props.producto.nombreProducto} <span className='font-weight-bold'>${props.producto.precioProducto}</span> 
                  </p>
                  <div>
              <Button variant='warning mr-2'>Editar</Button>
              <Button variant='danger'>Borrar</Button>
                  </div>
              </ListGroup.Item>
        </div>
    );
};

export default ItemProductos;
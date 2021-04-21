import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';
const ItemProductos = () => {
    return (
        <div>
              <ListGroup.Item className='d-flex justify-content-between'>
                  <p>
                  Nombre del producto <span className='font-weight-bold'>$100</span> 
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
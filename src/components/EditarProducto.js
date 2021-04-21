import React from 'react';
import { Container, Form, Button } from "react-bootstrap";

const EditarProducto = () => {
    return (
        <Container>
          <Form className="my-5">
            <h1 className="my-5">Editar producto</h1>
            <Form.Group>
              <Form.Label>Nombre del producto* </Form.Label>
              <Form.Control
                type="text"
                placeholder="cafe"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio* </Form.Label>
              <Form.Control
                type="number"
                placeholder="50"
              ></Form.Control>
            </Form.Group>
            <h3 className="text-center mt-4">Categoria</h3>
            <div className="text-center my-4">
              <Form.Check
                inline
                type="radio"
                label="Bebida caliente"
                name="categoria"
                value="bebida-caliente"
               
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                label="Bebida fria"
                name="categoria"
                value="bebida-fria"
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                label="Dulce"
                name="categoria"
                value="dulce"
              ></Form.Check>
              <Form.Check
                inline
                type="radio"
                label="Salado"
                name="categoria"
                value="salado"
              ></Form.Check>
            </div>
            <Button variant="danger" type="submit" className="w-100">
              Guardar
            </Button>   
          </Form>
        </Container>
      );
    };

export default EditarProducto;
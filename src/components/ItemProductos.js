import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import {Link} from "react-router-dom"

const ItemProductos = (props) => {
  const eliminarProducto = (codigo) => {
    Swal.fire({
      title: "¿Estas seguro de eliminar el producto?",
      text: "No puedes recuperar un producto eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(codigo);
        //Agregar solicitud deleted
        try {
          const URL = process.env.REACT_APP_API_URL + "/" + codigo;
          const respuesta = await fetch(URL, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });

          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "Producto eliminado!",
              "El producto seleccionado fue correctamente eliminado",
              "success"
            );

            // Volver a hacer la consula a la API
            props.consultarAPI();
          }
        } catch (error) {
          console.log(error);
          Swal.fire("Ocurrio un error", "Intentelo nuevamente", "warning");
        }
      }
    });
  };

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        <p>
          {props.producto.nombreProducto}{" "}
          <span className="font-weight-bold">
            ${props.producto.precioProducto}
          </span>
        </p>
        <div>
          <Link className='btn btn-warning mr-2' to={`/productos/editar/${props.producto.id}`}>
            editar
          </Link>
          <Button
            variant="danger"
            onClick={() => eliminarProducto(props.producto.id)}
          >
            Borrar
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
};

export default ItemProductos;

import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider.jsx';
import { CheckCircle, ShoppingCart, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";


const ThankYouPage = () => {
  const { carrito, total, vaciarCarrito } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="text-center">
        {/* Icono de confirmación */}
        <CheckCircle size={64} className="text-success mb-3" />
        <h1 className="display-4 fw-bold">¡Gracias por su compra!</h1>
        <p className="lead">Su pedido ha sido procesado exitosamente.</p>
      </div>

      {/* Resumen de la compra */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">
                <ShoppingCart className="me-2" size={20} />
                Resumen de la Compra
              </h3>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio Unitario</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((item) => (
                      <tr key={item.id}>
                        <td>{item.nombre}</td>
                        <td>{item.cantidad}</td>
                        <td>${item.precio.toFixed(2)}</td>
                        <td>${(item.precio * item.cantidad).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="3">Total</th>
                      <th>${total.toFixed(2)}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para volver al inicio */}
      <div className="d-grid gap-2 mt-5">
        <Link to="/" className="btn btn-primary btn-lg" onClick={vaciarCarrito}>
          <Home className="me-2" size={20} />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
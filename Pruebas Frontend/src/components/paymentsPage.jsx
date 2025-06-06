import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider.jsx';
import { User, MapPin, CreditCard, ShoppingCart, Trash2, CheckCircle } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import PayPalCheckout from './payPalcheckout';

const PaymentPage = () => {
  const { carrito, total, vaciarCarrito } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Proceso de Pago - Pocket Center</h1>
      <div className="row">
        {/* Información del cliente */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title">
                <User className="me-2" size={20} />
                Información del Cliente
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" id="telefono" placeholder="Ingresa tu teléfono" required />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Dirección de envío */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title">
                <MapPin className="me-2" size={20} />
                Dirección de Envío
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="direccion" className="form-label">Dirección</label>
                  <input type="text" className="form-control" id="direccion" placeholder="Ingresa tu dirección" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="ciudad" className="form-label">Ciudad</label>
                  <input type="text" className="form-control" id="ciudad" placeholder="Ingresa tu ciudad" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="codigoPostal" className="form-label">Código Postal</label>
                  <input type="text" className="form-control" id="codigoPostal" placeholder="Ingresa tu código postal" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Detalles de pago */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">
                <CreditCard className="me-2" size={20} />
                Detalles de Pago
              </h3>
              <PayPalCheckout />
            </div>
          </div>
        </div>
      </div>

      {/* Resumen del pedido */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">
                <ShoppingCart className="me-2" size={20} />
                Resumen del Pedido
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

      {/* Botón de confirmación */}
      <div className="d-grid gap-2 mt-4">
        <button className="btn btn-primary btn-lg" onClick={() => { navigate("/gracias") }}>
          <CheckCircle className="me-2" size={20} />
          Confirmar Pago
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
import React, { useContext } from 'react';
import { DataContext } from '../context/DataProvider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const CarritoModal = ({ isOpen, onClose }) => {
  const { carrito, total, eliminarProducto } = useContext(DataContext);
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              <i className="bi bi-cart"></i> Carrito de Compras
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {carrito.length === 0 ? (
              <div className="text-center py-4">
                <i className="bi bi-cart-x fs-1 text-muted"></i>
                <p className="mt-3">Tu carrito está vacío.</p>
              </div>
            ) : (
              <>
                <div className="list-group">
                {carrito.map((item) => (
                  <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-0">{item.nombre}</h6>
                      <small className="text-muted">${item.precio} c/u</small>
                    </div>
                    <span className="badge bg-primary rounded-pill">{item.cantidad}</span>
                    <button onClick={() => eliminarProducto(item.id)} className="btn btn-sm btn-outline-danger">
                    </button>
                  </div>
                ))}

                </div>
                <div className="alert alert-info mt-3 d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Total:</span>
                  <span className="fs-5">${total.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>

          <div className="modal-footer">
            <button onClick={onClose} className="btn btn-secondary">Cerrar</button>
            {carrito.length > 0 && (
              <button className="btn btn-success" onClick={() => { 
                onClose(); 
                navigate("/pagos"); 
              }}>
                <i className="bi bi-check-circle"></i> Proceder al Pago
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoModal;

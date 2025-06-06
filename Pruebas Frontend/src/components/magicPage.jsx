import React, { useEffect, useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider.jsx';

const MagicProducts = () => {
  const [products, setProducts] = useState([]);
  const { carrito, setCarrito } = useContext(DataContext);

  const añadirAlCarrito = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      setCarrito(carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  useEffect(() => {
    fetch('/productos.json') 
      .then(response => response.json())
      .then(data => {
        const filteredProducts = data.productos.filter(product => product.franquicia === 'magic');
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error cargando los productos:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Productos de Magic</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src={product.foto} className="card-img-top" alt={product.nombre} />
              <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                <p className="text-success">${product.precio.toLocaleString()}</p>
                {product.oferta && <span className="badge bg-danger">Oferta</span>}
                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  onClick={() => añadirAlCarrito(product)}
                >
                  Añadir al carrito
                </button>
                {product.oferta && <span className="badge bg-danger">Oferta</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagicProducts;
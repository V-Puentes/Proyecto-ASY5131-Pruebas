import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart;
  });

  // Calcula el total de manera dinámica
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]); 
    localStorage.removeItem('cart'); 
  };

  // Función para eliminar un producto específico
const eliminarProducto = (id) => {
  setCarrito((prevCarrito) => {
    const nuevoCarrito = prevCarrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    ).filter(item => item.cantidad > 0); 

    localStorage.setItem('cart', JSON.stringify(nuevoCarrito));
    return nuevoCarrito;
  });
};


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <DataContext.Provider value={{
      carrito,
      setCarrito,
      total,
      vaciarCarrito,
      eliminarProducto
    }}>
      {children}
    </DataContext.Provider>
  );
};
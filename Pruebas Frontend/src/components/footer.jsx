const Footer = () => {
    return (
      <footer className="bg-light py-5">
        <div className="container">
          {/* Sección de Ventajas */}
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 text-primary mb-2">🚚</div>
                <h5 className='text-black'>Envío Gratis</h5>
                <p className="small text-muted">En compras sobre $50.000</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 text-primary mb-2">🔒</div>
                <h5 className='text-black'>Pago Seguro</h5>
                <p className="small text-muted">Transacciones protegidas</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 text-primary mb-2">💯</div>
                <h5 className='text-black'>Garantía Original</h5>
                <p className="small text-muted">Productos 100% auténticos</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <div className="fs-1 text-primary mb-2">💬</div>
                <h5 className='text-black'>Atención 24/7</h5>
                <p className="small text-muted">Soporte técnico todos los días</p>
              </div>
            </div>
          </div>
  
          {/* Información adicional */}
          <div className="border-top mt-5 pt-3 text-center text-muted small">
            <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contacto - Pocket Center</h1>
      <div className="row">
        {/* Información de contacto */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title">Información de Contacto</h3>
              <p className="card-text">
                ¡Estamos aquí para ayudarte! Si tienes alguna pregunta sobre nuestros productos, envíos o cualquier otra inquietud, no dudes en contactarnos.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <MapPin className="me-2" size={18} />
                  <strong>Dirección:</strong> Calle Ficticia 123, Santiago, Chile
                </li>
                <li className="mb-2">
                  <Phone className="me-2" size={18} />
                  <strong>Teléfono:</strong> +56 9 1234 5678
                </li>
                <li className="mb-2">
                  <Mail className="me-2" size={18} />
                  <strong>Email:</strong> contacto@pocketcenter.cl
                </li>
                <li className="mb-2">
                  <Clock className="me-2" size={18} />
                  <strong>Horario de atención:</strong> Lunes a Viernes, 10:00 - 18:00 hrs
                </li>
              </ul>
              <div className="mt-4">
                <h5>Síguenos en redes sociales:</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="text-decoration-none">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-decoration-none">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-decoration-none">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h3 className="card-title">Formulario de Contacto</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="asunto" className="form-label">Asunto</label>
                  <input type="text" className="form-control" id="asunto" placeholder="Ingresa el asunto" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  <Send className="me-2" size={18} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mapa ficticio */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Ubicación de la Tienda</h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.511258343332!2d-70.64338668480094!3d-33.43788598077875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a3a4b5f5e7%3A0x1c3b9d6e9b0b0b0b!2sCalle%20Ficticia%20123%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1633020000000!5m2!1ses!2scl"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mapa de ubicación"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
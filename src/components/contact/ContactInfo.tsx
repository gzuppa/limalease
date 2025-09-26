

import React from 'react';

const ContactInfo = () => {
  return (
    <>
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/location-icon.png"
                  alt="img" /></div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">Dirección</h4>
                  <p className="pra fs-seven">
                    Blvd. Manuel Ávila Camacho 40, Lomas de Chapultepec III Secc, Miguel Hidalgo, 11000, CDMX
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/phone-icon.png"
                  alt="img" /></div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">Teléfono</h4>
                  <p className="pra fs-seven">
                    Estamos disponibles en el siguiente número 
                  </p>
                  <a href="#" className="p1-clr fw-semibold">55 7938 5984</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/mail-icon.png"
                  alt="img" /></div>
                <div className="cont">
                  <h4 className="black fw-bold mb-2 visible-slowly-bottom">Soporte por correo</h4>
                  <p className="pra fs-seven">
                    Escríbenos, estamos para ayudarte
                  </p>
                  <a href="#" className="p1-clr fw-semibold">contacto@limexlease.mx</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
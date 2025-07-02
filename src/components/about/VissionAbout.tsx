

import React from 'react';

const VissionAbout = () => {
  return (
    <>
      <section className="contact-info-section fix mb-20">
        <div className="container">
          {/* <div className="section-title mb-xxl-5 mb-4 text-center">
            <h4 className="black visible-slowly-right fw-bold d-block">
              Tu pago inicial siempre es más bajo que el que te pide un banco o el esquema de financiamiento a plazos de la agencia.
            </h4>
          </div> */}
          <div className="breadcrumbs-content text-center mb-20">
                <h2 className="fw-bold black wow fadeInUp" data-wow-delay="0.4s">Ventajas</h2>
                {/* <p className="black pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  j
                </p> */}
              </div>
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/location-icon.png"
                  alt="img" /></div>
                <div className="cont">
                  <p className="pra fs-seven">
                    Tu pago inicial siempre es más bajo que el que te pide un banco o el esquema de financiamiento a plazos de la agencia
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/labels.png"
                  alt="img" /></div>
                <div className="cont">
                  <p className="pra fs-seven">
                    Al terminar el contrato puedes rentarlo nuevamente a una renta menor, devolverlo o comprarlo a una fracción de su valor original.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/mission.png"
                  alt="img" /></div>
                <div className="cont">
                  <p className="pra fs-seven">
                    Aplica para renta de Equipo Industrial, Equipo de Cómputo, Equipo Médico y Equipo de Transporte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-lg-4 g-3 mt-3 align-items-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/settings.png"
                  alt="img" /></div>
                <div className="cont">
                  <p className="pra fs-seven">
                    Es muy simple de administrar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/technology.png"
                  alt="img" /></div>
                <div className="cont">
                  <p className="pra fs-seven">
                    Nunca te cotizaremos costos iniciales, costos extras o adicionales (Comisiones X,Y)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="contact-info-item">
                <div className="icon black-bg rounded-2 d-center"><img src="assets/img/icon/vission.png"
                  alt="img" /></div>
                <div className="cont">
                  <p className="pra fs-seven">
                    Sin utilizar tu capital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VissionAbout;
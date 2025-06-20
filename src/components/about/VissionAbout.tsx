

import React from 'react';

const VissionAbout = () => {
  return (
    <>
      <section className="vission-section fix space-top space-bottom">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-5">
              <div className="vissiton-thumb wow fadeInUp">
                <img src="assets/img/element/leasing2.jpg" alt="img" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="vission-content">
                <div className="section-title">
                  <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                    data-wow-delay=".3s">
                    OFERTA DE VALOR
                  </h6>
                  <h2 className="black visible-slowly-right fw-bold mb-xl-4 mb-3 d-block">
                    ¿Porque el leasing?
                  </h2>
                  <p className="pra visible-from-bottom mb-40">
                    Al terminar el contrato de renta puedes rentarlo nuevamente a una renta menor, devolver el auto o comprarlo a una fracción de su valor original.
                  </p>
                  <div className="mission-box-inner">
                    <div className="mission-box">
                      <div className="icon d-center"><img src="assets/img/icon/vission.png" alt="img" /></div>
                      <div className="cont">
                        <h4 className="black mb-xxl-3 mb-2 fw_700 visible-slowly-bottom">¿En que usar el leasing?</h4>
                        <p className="pra wow fadeInUp">Aplica para Equipo Industrial, Equipo de Cómputo, Equipo Médico y Equipo de Transporte.</p>
                      </div>
                    </div>
                    <div className="mission-box">
                      <div className="icon d-center"><img src="assets/img/icon/mission.png" alt="img" /></div>
                      <div className="cont">
                        <h4 className="black mb-xxl-3 mb-2 fw_700 visible-slowly-bottom">Más ventajas</h4>
                        <p className="pra wow fadeInUp">Es muy simple de administrar y nunca te cotizamos costos iniciales extras adicionales ( Comisiones X,Y)</p>
                      </div>
                    </div>
                  </div>
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
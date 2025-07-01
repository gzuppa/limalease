
import React from 'react';

const BreadcrumbsService = () => {
  return (
    <>
      <section className="position-relative space-top white-bg space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <h2 className="black fw_700 visible-slowly-right">¿Quienes somos?</h2>
            </div>
            <div className="col-xl-5 col-lg-6">
              <p className="black fw_700 visible-slowly-right" data-wow-delay="0.3s">
                Somos una arrendadora mexicana laborando en el mercado financiero y empresarial por más de 25 años, los fundadores de LIMEX nos dimos cuenta de que queremos hacer del arrendamiento algo más simple, accesible y poder contribuir un poco para mejorar el mundo en el que vivimos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbsService;
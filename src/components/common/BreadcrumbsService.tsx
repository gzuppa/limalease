
import React from 'react';

const BreadcrumbsService = () => {
  return (
    <>
      <section className="position-relative space-top white-bg space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-between">
            <div className="col-xl-12 col-lg-12">
              <h2 className="black fw_700 visible-slowly-right text-center">¿Quienes somos?</h2>
            </div>
            <div className="col-xl-12 col-lg-12 mt-20">
              <h5 className="fw_700 visible-slowly-right d-none d-md-block" data-wow-delay="0.3s">
                Somos una arrendadora mexicana laborando en el mercado financiero y empresarial por más de 25 años, los fundadores de LIMEX nos dimos cuenta de que queremos hacer del arrendamiento algo más simple, accesible y poder contribuir un poco para mejorar el mundo en el que vivimos.
              </h5>
            </div>
            <div className="col-xl-12 col-lg-12 mt-20">
              <h5 className="fw_700 text-justify d-block d-md-none">
                Somos una arrendadora mexicana laborando en el mercado financiero y empresarial por más de 25 años, los fundadores de LIMEX nos dimos cuenta de que queremos hacer del arrendamiento algo más simple, accesible y poder contribuir un poco para mejorar el mundo en el que vivimos.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbsService;

"use client"

import Link from 'next/link';
import React from 'react';


if(typeof window !== 'undefined') {
  require('bootstrap/js/dist/collapse');
}

const FaqPricing = () => {
  return (
    <>
      <section className="faq-section-version2 fix white-bg">
        <div className="container">
          <div className="section-title text-center mb-60 pb-20">
            <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              VALORES
            </h6>
            <h4 className="black visible-slowly-right d-block">
              Este 2025 LIMEX®  entra en una nueva etapa de crecimiento, robusteciendo su inversión en capital, incorporando nuevo talento en todas las áreas, fortaleciendo sus capacidades de fondeo y ampliando su capacidad operativa y de proceso.            </h4>
          </div>

          <div className="services-content-wrap mb-60">
            <div className="ser-line"></div>
              <div className="service-inner position-relative d-flex align-items-center justify-content-between">
                <h3 className="black fw-bold visible-slowly-right"><Link href="/about" className="black">01/ Lean</Link></h3>
                <Link href="/about" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

                <img src="assets/img/element/sustentability.jpg" alt="img" className="service-hover" />
              </div>
            <div className="ser-line"></div>
            <div className="service-inner position-relative d-flex align-items-center justify-content-between">
              <h3 className="black fw-bold visible-slowly-right"><Link href="/pricing" className="black">02/ Green</Link>
              </h3>
              <Link href="/pricing" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

              <img src="assets/img/element/sustentability2.jpg" alt="img" className="service-hover" />
            </div>
            <div className="ser-line"></div>

             <div className="service-inner position-relative d-flex align-items-center justify-content-between">
              <h3 className="black fw-bold visible-slowly-right"><Link href="/pricing" className="black">03/ Lease</Link>
              </h3>
              <Link href="/pricing" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

              <img src="assets/img/element/sustentability3.jpg" alt="img" className="service-hover" />
            </div>
            <div className="ser-line"></div>
          </div>

          <div className="row g-lg-0 g-4 align-items-center justify-content-lg-between justify-content-center mt-60">
            <div className="col-lg-5">
              <div className="faq-thumb-version2 rounded-3 reveal-left w-100">
                <img src="assets/img/element/leasing5.jpeg" alt="img" className="rounded-3 w-100" />
              </div>
            </div>
            <div className="col-lg-1 d-lg-block d-none">
              <div className="faqs-lines"></div>
            </div>
            <div className="col-lg-6">
              <div className="accordion faq-content border-0 d-flex flex-column gap-xxl-4 gap-3"
                id="accordionExample">
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="accordion-header" id="headingOne11">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne11" aria-expanded="true" aria-controls="collapseOne11">
                      Lean
                    </button>
                    <div id="collapseOne11" className="accordion-collapse collapse show"
                      aria-labelledby="headingOne11" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Que siempre sea la mejor oferta que puedas tener para usar y comprar un auto nuevo. Somos una arrendadora de “bajo costo”, esto quiere decir que el dinero que nos ahorramos al tener una operación muy eficiente (LEAN) podemos aplicarlo en la cuota que pagas cada mes por tu auto. Todos ganamos.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                  <div className="accordion-header" id="headingTwo22">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo22" aria-expanded="false" aria-controls="collapseTwo22">
                      Green
                    </button>
                    <div id="collapseTwo22" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo22" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Que puedas tener un auto nuevo que sea amigable con el medioambiente
Si ya decidiste tener un auto nuevo, estamos seguros de que es porque lo necesitas, así que, además de tener un coche espectacular y hermoso, también puedes optar por uno sustentable y con un consumo de combustible muy eficiente.
Cada vez existen más opciones de compra para autos híbridos (motor combinado de gasolina y eléctrico) y 100% eléctricos de todo tipo (SUVs, deportivos, familiares) que, además de tener muy baja emisión de combustible, tienen otros beneficios en pagos de impuestos, deducibilidad y exención de verificación.
Considera estas opciones y si tienes que escoger un auto 100% de gasolina, siempre es mejor que sea lo más eficiente posible en su consumo, así gastas menos y cuidas más el ambiente.
</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="accordion-header" id="headingTwo33">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo33" aria-expanded="false" aria-controls="collapseTwo33">
                      Lease
                    </button>
                    <div id="collapseTwo33" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo33" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Es el significado en inglés del término “arrendamiento” que simplemente consiste en pagar una renta cada mes por usar algo
Si después de rentarlo un tiempo (24, 36 o 48 Meses) decides quedártelo, puedes comprarlo a un precio muy bajo con respecto a su valor original.
La tecnología disponible hoy en día nos ayuda a ser muy eficientes con este propósito</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="accordion-header" id="headingTwo44">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo44" aria-expanded="false" aria-controls="collapseTwo44">
                      Whats the best-selling liquid at the moment?
                    </button>
                    <div id="collapseTwo44" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo44" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="accordion-header" id="headingTwo55">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo55" aria-expanded="false" aria-controls="collapseTwo55">
                      What brands are you selling at the moment?
                    </button>
                    <div id="collapseTwo55" className="accordion-collapse collapse"
                      aria-labelledby="headingTwo55" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p className="pra">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                          aut fugit, sed quia consequuntur magni dolores</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPricing;
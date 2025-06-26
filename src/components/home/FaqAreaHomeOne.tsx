
"use client"
import React from 'react';

if(typeof window !== 'undefined') {
  require('bootstrap/js/dist/collapse');
}

const FaqAreaHomeOne = () => {
  return (
    <>
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-title text-center mb-60">
            {/* <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              FAQ
            </h6> */}
            <h2 className="black visible-slowly-right fw-bold d-block">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="accordion faq-content border-0 d-flex flex-column gap-xxl-4 gap-3" id="accordionExample">
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
              <div className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ¿Cuál es la Tasa de Interés?
                </button>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Los contratos de Arrendamiento no consideran el pago de intereses, solamente el pago de rentas periódicas por el uso del equipo la cual se determina en función del tipo de equipo, su vida útil, el desgaste y su ubicación entre otros factores.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  ¿Qué pasa con mi equipo al finalizar el contrato de renta?
                </button>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Puedes devolver el equipo a LIMEX®, comprarlo o extender tu contrato de renta por un período adicional.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
              <div className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  ¿Cuánto es mi inversión inicial?
                </button>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Usualmente el pago de 1 renta en garantía, 1 renta anticipada y una baja comisión de apertura</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="accordion-header" id="headingfour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                  ¿De quién es el equipo?
                </button>
                <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">En un contrato de Arrendamiento el equipo  es de LIMEX y el usuario de ese equipo por el tiempo contratado eres tú como nuestro cliente, esto implica que su buen uso y mantenimiento son responsabilidad tuya, si decides comprarlo al final se factura de acuerdo al precio acordado.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="accordion-header" id="headingfive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                  Además de automóviles ¿Qué otros tipos de equipo puedo rentar?
                </button>
                <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Ofrecemos maquinaria, equipo médico, vehículos y maquinaria agrícola, con contratos flexibles y sin inversión inicial. Nuestros equipos están en perfectas condiciones, con mantenimiento incluido y soporte técnico, para que puedas reducir costos y mejorar tu productividad de manera sencilla y confiable.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="accordion-header" id="headingsix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                  ¿Qué es nuestro servicio de arrendamiento?
                </button>
                <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p className="pra">Ofrecemos maquinaria, equipo médico, vehículos y maquinaria agrícola en renta, con contratos flexibles y sin inversión inicial. Nuestros equipos están en perfectas condiciones, con mantenimiento incluido y soporte técnico, para que puedas reducir costos y mejorar tu productividad de manera sencilla y confiable.
</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqAreaHomeOne;
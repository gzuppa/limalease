

import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
  return (
    <>
       <section className="services-section position-relative section-padding fix">
        <div className="container">
            <div className="section-title text-center mb-60">
                <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
                    Nuestros beneficios
                </h6>
                <h2 className="black visible-slowly-right fw-bold d-block">
                    Ventajas financieras y fiscales
                </h2>
            </div>
            <div className="choose-wrapper services-wrapper-main d-initial">
                <div className="row g-0 justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="choose-item stage-one text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss1.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Capital
                            </h4>
                            <p className="pra fs-seven fadeInUp">Conserva Capital de Trabajo para otros usos</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item stage-one text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss2.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Pagos
                            </h4>
                            <p className="pra fs-seven fadeInUp">El pago inicial tiene una gran accesibilidad</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item stage-one text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss3.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Impuestos
                            </h4>
                            <p className="pra fs-seven fadeInUp">Deducibilidad de rentas para efectos de ISR</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item stage-one text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss4.png"
                                    alt="icon" /></div>
                            <h4 className="black fw-bold visible-slowly-right">Impuestos
                            </h4>
                            <p className="pra fs-seven fadeInUp">Acreditación del IVA que se origine de las rentas</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss5.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Financiamiento
                            </h4>
                            <p className="pra fs-seven fadeInUp">Financiamiento del valor total de los equipos.</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss6.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Tiempo
                            </h4>
                            <p className="pra fs-seven fadeInUp">Plazos de acuerdo con tiempo de vida útil del equipo a arrendar</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss7.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Flexibilidad
                            </h4>
                            <p className="pra fs-seven fadeInUp">Esquemas flexibles que se adaptan a tus necesidades</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss8.png"
                                    alt="icon" /></div>
                            <h4 className="black fw-bold visible-slowly-right"><Link href="/service-details"
                                    className="black">Architecture VR</Link>
                            </h4>
                            <p className="pra fs-seven fadeInUp">There are many variations passages the majority have
                                suffered</p>
                            <Link href="/service-details" className="sub-font red">Read More</Link>
                            
                            <img src="assets/img/element/service-layer.png" alt="shape" className="service-layer" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>

    <section className="services-section position-relative section-padding fix">
        <div className="container">
            <div className="section-title text-center mb-60">
                <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
                    Nuestros beneficios
                </h6>
                <h2 className="black visible-slowly-right fw-bold d-block">
                    Ventajas operativas
                </h2>
            </div>
            <div className="choose-wrapper services-wrapper-main d-initial">
                <div className="row g-0 justify-content-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="choose-item stage-one text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss1.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Renueva
                            </h4>
                            <p className="pra fs-seven fadeInUp">Evita la obsolescencia del producto o servicio</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item stage-one text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss2.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Accesibilidad
                            </h4>
                            <p className="pra fs-seven fadeInUp">Acceso a mejores condiciones ya que se paga de contado</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item stage-one text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss3.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Procesos
                            </h4>
                            <p className="pra fs-seven fadeInUp">Apoyo en el proceso de compra con los proveedores</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss5.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Actualiza
                            </h4>
                            <p className="pra fs-seven fadeInUp">Permite una adecuada renovación y actualización de los equipos</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss6.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Extras
                            </h4>
                            <p className="pra fs-seven fadeInUp">Se pueden incluir servicios adicionales Sale & Lease Back</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss7.png"
                                    alt="icon" />
                            </div>
                            <h4 className="black fw-bold visible-slowly-right">Flujo
                            </h4>
                            <p className="pra fs-seven fadeInUp">El arrendatario puede vender sus mismo equipos a la arrendadora</p>
                            {/* <Link href="/service-details" className="sub-font red">Read More</Link> */}
                            
                            <img src="assets/img/element/greenbg2.jpg" alt="shape" className="service-layer" />
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 col-sm-6 sevice-left-stage">
                        <div className="choose-item text-center">
                            <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/ss8.png"
                                    alt="icon" /></div>
                            <h4 className="black fw-bold visible-slowly-right"><Link href="/service-details"
                                    className="black">Architecture VR</Link>
                            </h4>
                            <p className="pra fs-seven fadeInUp">There are many variations passages the majority have
                                suffered</p>
                            <Link href="/service-details" className="sub-font red">Read More</Link>
                            
                            <img src="assets/img/element/service-layer.png" alt="shape" className="service-layer" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default ServiceArea;
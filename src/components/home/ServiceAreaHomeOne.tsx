import Link from 'next/link';
import React from 'react';

const ServiceAreaHomeOne = () => {
  return (
    <>
      <section className="services-section position-relative fix section-padding">
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              Servicios
            </h6>
            <h2 className="black visible-slowly-right fw-bold d-block">
              Titulo<br />
              
            </h2>
          </div>
          <div className="services-content-wrap">
            <div className="ser-line"></div>
              <div className="service-inner position-relative d-flex align-items-center justify-content-between">
                <h3 className="black fw-bold visible-slowly-right"><Link href="/about" className="black">01/ Ventajas</Link></h3>
                <Link href="/about" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

                <img src="assets/img/blog/service-img1.png" alt="img" className="service-hover" />
              </div>
            <div className="ser-line"></div>
            <div className="service-inner position-relative d-flex align-items-center justify-content-between">
              <h3 className="black fw-bold visible-slowly-right"><Link href="/pricing" className="black">02/ Nosotros</Link>
              </h3>
              <Link href="/pricing" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

              <img src="assets/img/element/leasing3.jpg" alt="img" className="service-hover" />
            </div>
            {/* <div className="ser-line"></div>
            <div className="service-inner position-relative d-flex align-items-center justify-content-between">
              <h3 className="black fw-bold visible-slowly-right"><Link href="/service-details" className="black">03/ Servicio 3</Link></h3>
              <Link href="/service-details" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

              <img src="assets/img/blog/service-img3.jpg" alt="img" className="service-hover" />
            </div>
            <div className="ser-line"></div>
            <div className="service-inner position-relative d-flex align-items-center justify-content-between">
              <h3 className="black fw-bold visible-slowly-right"><Link href="/service-details" className="black">04/ Servicio 4</Link></h3>
              <Link href="/service-details" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

              <img src="assets/img/blog/service-img4.jpg" alt="img" className="service-hover" />
            </div>
            <div className="ser-line"></div>
            <div className="service-inner position-relative d-flex align-items-center justify-content-between">
              <h3 className="black fw-bold visible-slowly-right"><Link href="/service-details" className="black">05/ Servicio 5</Link>
              </h3>
              <Link href="/service-details" className="arrows-right"><i className="fa-solid fa-arrow-right"></i></Link>

              <img src="assets/img/blog/service-img1.png" alt="img" className="service-hover" />
            </div> */}
            <div className="ser-line"></div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;
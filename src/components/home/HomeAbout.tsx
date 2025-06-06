
import Link from 'next/link';
import React from 'react';

const HomeAbout = () => {
  return (
    <>
      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about-thumbs">
                <div className="thumb-inner">
                  <div className="img-about reveal-left">
                    <img src="assets/img/about/about1.jpg" alt="img" className="w-100" />
                  </div>
                  <div className="content-count">
                    <div className="count-item">25+</div>
                    <p>Años de <br />
                      experiencia</p>
                  </div>
                </div>
                <div className="thumb-inner d-flex reveal-bottom">
                  <img src="assets/img/about/about2.jpg" alt="img" className="w-100" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                    data-wow-delay=".3s">Acerca de 
                  </h6>
                  <h2 className="black visible-slowly-right fw-bold mb-xl-4 mb-3 d-block">
                    Titulo
                  </h2>
                  <p className="pra mb-lg-3 mb-2 visible-from-bottom">
                    Descripcion 1
                  </p>
                  <p className="pra mb-xl-2 visible-from-bottom">
                    Descripcion 2
                  </p>
                  <Link href="/about"
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg mt-4 rounded-2">
                    Boton
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
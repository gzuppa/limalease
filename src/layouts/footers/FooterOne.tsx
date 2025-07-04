

import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <>
      <footer className="footer-section blackbg fix">
        <div className="footer-top position-relative">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="footer-widget text-md-start text-center">
                  <div className="pragraph-widget d-grid gap-xxl-4 gap-3">
                    <p className="fw_600">
                      Descubre todas las posibilidades que te ofrece el leasing.
                    </p>
                    <span className="fs-five white-clr">Estamos listos para ayudarte</span>
                    <a href="#" className="fs-four d-block white-clr">+52 55 7938 5984</a>
                    <a href="#" className="fs-four d-block white-clr mb-3">contacto@limexleasing.mx</a>
                    <ul
                      className="social-text d-flex justify-content-center justify-content-md-start flex-xl-nowrap flex-wrap align-items-center gap-xxl-3 gap-xl-2 gap-1">
                      <li><a href="#"
                        className="box-style first-box text-uppercase rounded-5 d-inline-block">Twitter</a>
                      </li>
                      <li><a href="#"
                        className="box-style first-box text-uppercase rounded-5 d-inline-block">Facebook</a>
                      </li>
                      <li><a href="#"
                        className="box-style first-box text-uppercase rounded-5 d-inline-block">Mail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="footer-widget footer-latest">
                  <h4 className="white-clr fw_600">Latest Post</h4>
                  <ul className="latest-post">
                    <li><Link href="/blog"><img src="assets/img/footer/latest1.png" alt="img" /></Link></li>
                    <li><Link href="/blog"><img src="assets/img/footer/latest2.png" alt="img" /></Link></li>
                    <li><Link href="/blog"><img src="assets/img/footer/latest3.png" alt="img" /></Link></li>
                    <li><Link href="/blog"><img src="assets/img/footer/latest4.png" alt="img" /></Link></li>
                    <li><Link href="/blog"><img src="assets/img/footer/latest5.png" alt="img" /></Link></li>
                    <li><Link href="/blog"><img src="assets/img/footer/latest6.png" alt="img" /></Link></li>
                  </ul>
                </div>
              </div> */}
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="footer-widget text-md-start text-center">
                  <h4 className="white-clr fw_600">Blvd. Manuel Ávila Camacho 40, Lomas de Chapultepec III Secc, Miguel Hidalgo, 11000, CDMX</h4>
                  {/* <ul className="footer-list mb-40">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="#">Testimonials</Link></li>
                    <li><Link href="/service">Services</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="#">Pricing Plan</Link></li>
                    <li><Link href="/contact">Contact us</Link></li>
                  </ul> */}
                  <form action="#" className="wow fadeInDown">
                    <input type="email" placeholder="Ingresa tu correo..." />
                    <button type="button"
                      className="subscribe box-style first-box p1-bg fs-seven fw_700 white-clr text-center text-nowrap py-3 px-4 rounded-2">Suscribete</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <img src="assets/img/element/slogan-v1-shape3.png" alt="element" className="footer-element" />
        </div>
        {/* <div className="footer-bottom">
          <div className="container">
            <p className="text-white fs-seven wow fadeInLeft body-font text-center" data-wow-delay=".3s">
              rk-theme © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default FooterOne;
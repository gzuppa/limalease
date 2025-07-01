
"use client" 
import Link from 'next/link';
import React from 'react';

const ChooseAreaHomeOne = ({ style_2, style_3, setIsVideoOpen }: any) => { 

  return (
    <>
      <section className={`choose-section position-relative fix section-padding `}>
      <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="body-font p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp" data-wow-delay=".3s">
              Nuestros beneficios
            </h6>
            <h2 className="black visible-slowly-right fw-bold d-block">
              Ventajas financieras y fiscales <br />
              
            </h2>
          </div>
          <div className="choose-wrapper">
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/settings.png"
                alt="icon" /></div>
              <h4 className="black fw-bold visible-slowly-right"><Link href="/service-details" className="black">Item 1</Link></h4>
              <p className="pra fs-seven fadeInUp">Conserva Capital de Trabajo para otros usos</p>
              {/* <Link href="/service-details" className="sub-font red">Mas</Link> */}
            </div>
            <div className="choose-line"></div>
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/technology.png"
                alt="icon" /></div>
              <h4 className="black fw-bold visible-slowly-right"><Link href="/service-details" className="black">Item 2</Link></h4>
              <p className="pra fs-seven fadeInUp">Pago inicial muy accesible</p>
              {/* <Link href="/service-details" className="sub-font red">Mas</Link> */}
            </div>
            <div className="choose-line"></div>
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/labels.png" alt="icon" />
              </div>
              <h4 className="black fw-bold visible-slowly-right"><Link href="/service-details" className="black">Item 3</Link></h4>
              <p className="pra fs-seven fadeInUp">There are many variations passages the majority have
                suffered</p>
              {/* <Link href="/service-details" className="sub-font red">Mas</Link> */}
            </div>
            <div className="choose-line"></div>
            <div className="choose-item text-center">
              <div className="icon black-bg d-center rounded-circle"><img src="assets/img/icon/hours-support.png"
                alt="icon" /></div>
              <h4 className="black fw-bold visible-slowly-right"><Link href="/service-details" className="black">Item 4</Link></h4>
              <p className="pra fs-seven fadeInUp">There are many variations passages the majority have
                suffered</p>
              {/* <Link href="/service-details" className="sub-font red">Mas</Link> */}
            </div>
          </div>
          {/* {style_2 ? null :
            <div className="play-thumb space-top reveal-left00 w-100 position-relative d-center rounded-2">
              <img src="assets/img/about/play-thumb.jpg" alt="img" className="w-100 rounded-2" />
              <a
                onClick={() => setIsVideoOpen(true)}
                style={{ cursor: 'pointer' }}
                className="play-in video-popup white-bg rounded-circle d-center fw-bold btn-vivacity fs-five sub-font black">Play</a>
            </div>
          } */}
        </div>
      </section>
 

    </>
  );
};

export default ChooseAreaHomeOne;
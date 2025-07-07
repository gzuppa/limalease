
"use client" 
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BeneficiosFirmaCar.css'

const InfoCard = () => {
  return (
    <div className="container mt-5 p-7 bg-white rounded shadow">
      <h2 className="fw-bold">Estrena con nosotros</h2>
      <h4 className="mt-3 mb-4">Beneficios</h4>

      <div className="d-flex align-items-start mb-3">
        <i className="fa-regular fa-clock benefit-icon mt-1"></i>
        <p className="ms-3 mb-0">Tiempos de respuesta en 48 horas</p>
      </div>

      <div className="d-flex align-items-start mb-3">
        <i className="fa-solid fa-hand-holding-dollar benefit-icon mt-1"></i>
        <p className="ms-3 mb-0">Pago inicial mínimo y rentas mensuales fijas</p>
      </div>

      <div className="d-flex align-items-start mb-3">
        <i className="fa-regular fa-calendar-check benefit-icon mt-1"></i>
        <p className="ms-3 mb-0">Plazos de 12 a 60 meses</p>
      </div>

      <div className="d-flex align-items-start mb-3">
        <i className="fa-solid fa-headset benefit-icon mt-1"></i>
        <p className="ms-3 mb-0">Asesoría y atención personalizada</p>
      </div>

      <div className="d-flex align-items-start mb-3">
        <i className="fa-solid fa-car-side benefit-icon mt-1"></i>
        <p className="ms-3 mb-0">Opción de compra o devolución del auto</p>
      </div>

      <div className="mt-4">
        <button className="contact-btn">
          <a href='/contact'>
            CONTÁCTANOS &nbsp; <i className="fa-solid fa-chevron-right"></i>
          </a>
        </button>
      </div>
    </div>
  )
}

const HeroArea = ({setIsVideoOpen} : any) => {

  return (
    <>
      <section className="banner-section position-relative cmn-bg swiper">
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={1300}
          effect="fade"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".dot",
            clickable: true,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          modules={[Navigation, EffectFade, Autoplay, Pagination]}

        >
          <SwiperSlide className="swiper-slide">
            <div className="banner-inner-item hero-images1">
              <div className="container z-1 position-relative">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="white fw_700 mb-xl-4 mb-3">
                      Juntos hacemos crecer a México
                    </h1>
                    <p className="white fs-four mb-40">
                      Soluciones de arrendamiento para negocios de todos tamaños en cada rincón del país.
                    </p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <InfoCard />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-inner-item hero-images2">
              <div className="container z-1 position-relative">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="white fw_700 mb-xl-4 mb-3">
                      Juntos hacemos crecer a México
                    </h1>
                    <p className="white fs-four mb-40">
                      Soluciones de arrendamiento para negocios de todos tamaños en cada rincón del país.
                    </p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <InfoCard />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="banner-inner-item hero-images3">
              <div className="container z-1 position-relative">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1 className="white fw_700 mb-xl-4 mb-3">
                      Juntos hacemos crecer a México
                    </h1>
                    <p className="white fs-four mb-40">
                      Soluciones de arrendamiento para negocios de todos tamaños en cada rincón del país.
                    </p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <InfoCard />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        {/* <div className="banner-controller">
          <div className="swiper-dot text-center">
            <div className="dot"></div>
          </div>
          <div className="line"></div>
          <div className="array-button d-flex gap-lg-3 gap-2">
            <button className="array-prev"><i className="fa-solid fa-angle-left"></i></button>
            <button className="array-next active"><i className="fa-solid fa-angle-right"></i></button>
          </div>
        </div> */}
      </section>

     

    </>
  );
};

export default HeroArea;
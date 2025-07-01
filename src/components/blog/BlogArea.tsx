
"use client"
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
  return (
    <>
      <section className="inside-blog-main fix space-bottom pt-lg-0 pt-5">
        <div className="container">
          <div className="mb-60">
            <span className="text-center mb-xxl-5 mb-xl-4 mb-3">Ofrecemos maquinaria, equipo médico, vehículos y maquinaria agrícola en renta, con contratos flexibles y sin inversión inicial. Nuestros equipos están en perfectas condiciones, con mantenimiento incluido y soporte técnico, para que puedas reducir costos y mejorar tu productividad de manera sencilla y confiable.</span>
            {/* <form onClick={e => e.preventDefault()} className="inside-search-blog">
              <input type="text" placeholder="Search in blog" />
              <button type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form> */}
          </div>
          <div className="row g-4 mb-lg-5 mb-4">
            <div className="col-lg-6 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="#"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/element/flotill.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/element/flotill.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/element/flotill.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <h4 className="black">
                    Autos y flotillas
                  </h4>
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">¿Por qué comprar cuando puedes rentar? Aprovecha nuestras tarifas exclusivas y movilidad sin complicaciones.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="#"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/element/quiro.png" alt="img" className="w-100 img" />
                  <img src="assets/img/element/quiro.png" alt="img" className="w-100 img" />
                  <img src="assets/img/element/quiro.png" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <h4 className="black">
                    Equipo médico
                  </h4>
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Asegura la mejor atención a tus pacientes: renta equipo médico confiable y con soporte técnico garantizado.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="#"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/element/maquinaria.png" alt="img" className="w-100 img" />
                  <img src="assets/img/element/maquinaria.png" alt="img" className="w-100 img" />
                  <img src="assets/img/element/maquinaria.png" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <h4 className="black">
                    Maquinaria
                  </h4>
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">Impulsa tus proyectos con maquinaria de calidad: renta la mejor opción para tu obra o negocio hoy mismo.Impulsa tus proyectos con maquinaria de calidad: renta la mejor opción para tu obra o negocio hoy mismo.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-mg-6 col-sm-6">
              <div className="news-single-items blog-inside-blog2 overflow-hidden">
                <Link href="#"
                  className="news-image image-box-effect position-relative overflow-hidden">
                  <img src="assets/img/element/tractor.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/element/tractor.jpg" alt="img" className="w-100 img" />
                  <img src="assets/img/element/tractor.jpg" alt="img" className="w-100" />
                </Link>
                <div className="news-content">
                  <h4 className="black">
                    Equipos agrícolas
                  </h4>
                  <span className="fs-seven pra sub-font mb-xl-3 mb-2 d-block">¿Por qué invertir en maquinaria costosa? Renta equipos agrícolas eficientes y ahorra en tu cosecha.</span>
                </div>
              </div>
            </div>
          </div>
          {/* <ul className="serial-pagination d-flex align-items-center justify-content-center gap-3">
            <li><a href="#">1</a></li>
            <li><a href="#" className="active">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default BlogArea;
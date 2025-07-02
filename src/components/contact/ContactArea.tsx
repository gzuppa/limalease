

import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import Select from "react-select";
// import { LoadingButton } from "@mui/lab";

const ContactArea = () => {

  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const relocate = () => {
    window.location.href = "/";
  };

  const sendEmail = (e: { preventDefault: () => void; }) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        'limex_mail',
        'limex_contact',
        form.current!,
        'eviTS58gEqDf_KsRM'
      )
      .then(
        (result) => {
          alert("Mensaje enviado correctamente");
          setIsLoading(false);
          relocate();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const options = [
    { value: "Autos", label: "Autos" },
    { value: "Flotilla", label: "Flotilla" },
    { value: "Equipo médico", label: "Equipo médico" },
    { value: "Equipo agrónomo", label: "Equipo agrónomo" },
  ];
  
  return (
    <>
      <section className="getin-touch section-padding cmnbg-bg">
        <div className="container position-relative">
          <form ref={form} onSubmit={sendEmail}>
          <div className="getin-touch-wrap white-bg rounded-2 position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="getin-touch">
                  <div className="section-title">
                    <h6 className="body-font left-sub-maintain p1-clr mb-xxl-3 mb-sm-3 mb-2 text-uppercase wow fadeInUp"
                      data-wow-delay=".3s">Estemos en contacto
                    </h6>
                    <h2 className="black visible-slowly-right fw-bold d-block mb-xxl-4 mb-lg-3 mb-2">
                      ¿Necesitas ayuda? Contactanos
                    </h2>
                    <p className="pra mb-xxl-4 mb-3 visible-from-bottom">Estamos a tus órdenes para cualquier duda</p>
                    <h4 className="black fw-bold mb-1">Siempre listos para ayudarte</h4>
                    <a href="#" className="black fw-semibold fs-six">contact22@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 get-in-touch wow fadeInUp" data-wow-delay="0.4s">
                <div className="row g-xxl-4 g-3">
                  <div className="col-lg-12">
                    <input type="text" placeholder="Tu nombre" id="user_name" name='user_name'/>
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder="Tu email" id="user_email" name='user_email'/>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" placeholder="Tu teléfono" />
                  </div>
                  <div>
                    <Select
                      name="product"
                      className="rounded border border-gray-500"
                      placeholder={"Producto de interés"}
                      options={options}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea rows={5} placeholder="¿Como podemos ayudarte?" id='message' name='message'></textarea>
                  </div>
                  <div className="col-lg-12">
                    {/* <LoadingButton
                    loading={isLoading}
                    type="submit"
                    value="Send"
                    className="common-btn w-100 box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2"
                  >
                    Enviar
                  </LoadingButton> */}
                    <button type="submit" value='Send'
                      className="common-btn w-100 box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </form>
          {/* <img src="assets/img/element/get-shape.png" alt="img" className="get-shape" /> */}
          <img src="assets/img/element/get-elment.png" alt="img" className="get-element" />
        </div>
      </section>
    </>
  );
};

export default ContactArea;
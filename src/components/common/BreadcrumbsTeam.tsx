
import React from 'react';

const BreadcrumbsTeam = () => {
  return (
    <>
      <section className="banner-breadcrumbs position-relative section-padding">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2 className="fw-bold black mb-lg-3 mb-2 wow fadeInUp" data-wow-delay="0.4s">Amazing Team</h2>
                <p className="pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  Enjoy the limitless entertainment possibilities with VR. Witness, play, and explore new
                  worlds
                </p>
              </div>
            </div>
          </div>
          <div className="common-thumb">
            <img src="assets/img/about/team-big.jpg" alt="img" className="w-100 rounded-3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadcrumbsTeam;
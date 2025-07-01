
"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 


const BlogBreadcrumbs = () => {
  return (
    <>
      <section className="position-relative mt-20">
        <div className="container">
          <div className="row justify-content-center space-bottom">
            <div className="col-lg-6">
              <div className="breadcrumbs-content text-center">
                <h2 className="fw-bold black wow fadeInUp" data-wow-delay="0.4s">Productos</h2>
                {/* <p className="black pra fs-six wow fadeInUp" data-wow-delay="0.5s">
                  j
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogBreadcrumbs;
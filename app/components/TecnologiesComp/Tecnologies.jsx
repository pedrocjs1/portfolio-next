"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { SiSpring } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiHibernate } from "react-icons/si";
import { SiGradle } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
  return (
    <section className="mt-5">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2>Tecnologias</h2>
          <h3 className="text-muted mb-5">Tecnologias que utilizo</h3>
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap gap-3 p-4c srow text-center">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <FaJava className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SiSpring className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SiHibernate className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SiGradle className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SiPostgresql className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <SiJavascript className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <FaVuejs className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <FaReact className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <AiFillHtml5 className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <FaCss3Alt className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
          <SwiperSlide>
            <FaBootstrap className="mb-5" style={{ fontSize: "10rem" }} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

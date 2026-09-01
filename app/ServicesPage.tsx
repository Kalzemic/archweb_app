'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import "../Styles/ServicesPage.css";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [isMobile,setIsMobile]= useState(false)
  const services = [
    { url: "landing-pages", name: "דפי נחיתה" },
    { url: "interactive-websites", name: "אתרים אינטראקטיביים" },
    { url: "web-applications", name: "אפליקציות רשת" },
    { url: "automation-tools", name: "כלי אוטומציה" },
    { url: "ai-agents", name: "סוכני AI" },
  ];
  useEffect(()=>setIsMobile(window.innerWidth < 1000),[])
  return (
    <div className="services-page">
      <h1>השירותים שלנו</h1>
      <Swiper
        modules={[Autoplay, Navigation]}
        
        slidesPerView={isMobile? 1 : 3}
        spaceBetween={200}
        speed={2000}
        loop
        navigation
        centeredSlides
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        allowTouchMove={true}
      >
        {services.map((service) => (
          <SwiperSlide key={service.url}>
            <div className="service-card">
              <img className='service-img'src={`/services/${service.url}.png`} alt={service.name}/>
              <h2>{service.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

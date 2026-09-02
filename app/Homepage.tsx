"use client"
import "@/Styles/Page.css"
import '@/Styles/Homepage.css'
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ScrollEffect } from "./ScrollEffect";





const HomePage = () => {

    useEffect(()=>{
        ScrollEffect({styleClass:'hero-img-container',effectClass:'in-view'})
        ScrollEffect({styleClass:'hero-text',effectClass:'in-view'})
    },[])
    

    return (

<div className="hero-page">
  <video
    className="hero-video"
    src="/hero/archweb-hero-web-8bit.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
  />

  <div className="hero-content">
    <div className="hero-title">
      <h1 className="english-display" >ArchWeb</h1>

      <p className="hero-subtitle">
        הבית החדש לכל צרכי התוכנה שלכם
      </p>
    </div>

    <a href="#contact" className="hero-cta">
      בואו נתחיל
    </a>
  </div>
</div>
    );
}



export default HomePage;
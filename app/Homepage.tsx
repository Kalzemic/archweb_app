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


        <div className='hero-page'>
            <video className='hero-video' src='/hero/archweb-hero-web-8bit.mp4' autoPlay loop muted playsInline />
            <div className='hero-img-container'>
                <img src='/archweb_logo.PNG' alt='archweb logo' className='hero-img' />
            </div>
            <div className='hero-text'>
                <div className='hero-title'>
                    <h1>ArchWeb</h1>
                    <h2>הבית החדש לכל צרכי התוכנה שלכם</h2>
                </div>
                <motion.a
                    href="/#contact"
                    aria-label='contact us'
                    initial={{
                        boxShadow: "0 0 10px rgba(0, 195, 255, 0.9)",
                        background:
                            "linear-gradient(to right, rgba(246, 192, 117, 0.6), rgba(196, 94, 237, 0.6))",
                        backgroundSize: "200% 200%",
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeIn",
                    }}
                >בואו נתחיל</motion.a>
            </div>
        </div >
    );
}



export default HomePage;
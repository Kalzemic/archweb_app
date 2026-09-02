'use client'
import { useRouter } from 'next/navigation';
import '@/Styles/AboutPage.css'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ScrollEffect } from './ScrollEffect';

export default function AboutPage() {

    const navigate = useRouter();
    
    useEffect(()=>{
        ScrollEffect({styleClass:'about-text',effectClass:'in-view'})
        ScrollEffect({styleClass:'about-video',effectClass:'in-view'})
    },[])
    return (


        <div className='about-body'>
            <div className='about-video-container'>
                <video className='about-video' src="/about/about_small.mp4" controls />
            </div>
            <div className='about-text'>
                <h1  >אפליקציות | סטארט-אפים | אתרים | AI | תשתיות Cloud </h1>
                <h2 style={{fontSize:'60px', fontWeight:'900'}}>It All Starts With an Idea</h2>
                <h3>צוות מוסמך של מפתחי תוכנה המתמחים בתחום פיתוח הרשת שדואג להעניק לכם את המוצר שתמיד חלמתם עליו!</h3>
                <h3>
                    בין אם זו אפליקציית רשת, דף נחיתה, אתר אינטראקטיבי או כל רעיון שרציתם להפוך למציאות AI.
                   לרשותכם צוות מפתחי תוכנה מומחה 
                    שיודע לענות על כל הדרישות שלכם</h3>
                <h2>שילווה אתכם ויספק מענה לאורך כל הדרך</h2>
                <motion.button
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
                    aria-label='link to read more about the team'
                    className='team-button'
                    onClick={() => { navigate.push(`/team`) }}>קראו עוד</motion.button>
            </div>
        </div>

    );
}
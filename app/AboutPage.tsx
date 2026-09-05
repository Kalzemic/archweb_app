'use client'
import { useRouter } from 'next/navigation';
import '@/Styles/AboutPage.css'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ScrollEffect } from './ScrollEffect';
import Link from "next/link";

export default function AboutPage() {

    const navigate = useRouter();
    
    useEffect(()=>{
        ScrollEffect({styleClass:'about-text',effectClass:'in-view'})
        ScrollEffect({styleClass:'about-video',effectClass:'in-view'})
    },[])
    return (


        <div className="about-body">
  <div className="about-text">
    

    <h2 className="english-display">
      It All Starts With an Idea
    </h2>
    <p className="about-kicker">
      אפליקציות · סטארט־אפים · אתרים · AI · תשתיות ענן
    </p>
    <p>
    פיתוח מוצר דיגיטלי הוא הרבה יותר מכתיבת קוד. התהליך מתחיל בהבנת העסק, קהל היעד והבעיה שהמוצר צריך לפתור. משם עוברים לאפיון, עיצוב חוויית המשתמש, בחירת הטכנולוגיות, פיתוח, בדיקות והעלאה לאוויר.
    </p>

    <p>
    ב-ArchWeb אנחנו מפתחים אתרים, אפליקציות רשת, מערכות אוטומציה ופתרונות AI. אנחנו שמים דגש על ביצועים, אבטחה, נגישות, תחזוקה ויכולת לגדול יחד עם העסק, ומלווים את הלקוחות שלנו מהרעיון הראשוני ועד למוצר פעיל.
    </p>

    <Link href="/#contact" className="button-primary">
       דברו עם הצוות
    </Link>
  </div>

  <div className="about-video-container">
    <video
      className="about-video"
      src="/about/about_small.mp4"
      controls
      playsInline
      preload="metadata"
    />
  </div>
</div>

    );
}
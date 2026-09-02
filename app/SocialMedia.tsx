"use client"
import '@/Styles/SocialMedia.css'
import { FaWhatsapp } from "react-icons/fa";


export default function SocialMedia(){
    const whatsappLink = "https://wa.me/972524323903";
    return (<div className='social-media'>
          <button className="Whatsapp-button" aria-label="קישור לואצאפ"
            onClick={() => window.open(whatsappLink, "_blank")}>
            <FaWhatsapp className="whatsapp-icon" />
           
          </button>
          
          {/* <button className="Instagram-button" aria-label="קישור לאינסטגרם שלנו"
            onClick={() => window.open(InstaLink, "_blank")}>
            <FaInstagram className="Instagram-icon" />
          </button> */}
        </div>
    );
}
'use client'
import '@/Styles/Navbar.css'
import { useEffect, useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    useEffect(()=>{
        const onScroll = ()=>{
            const navbar = document.querySelector('.navbar');
            if(!navbar) return;

            const currentY = window.scrollY;
            const threshold = window.innerHeight * 0.7; //80vh
            if(currentY > threshold){
                navbar.classList.add('scrolled')
            }
            else {
                navbar.classList.remove('scrolled');
            } 
        };
        window.addEventListener('scroll',onScroll);
        onScroll();
        return ()=>window.removeEventListener('scroll',onScroll);
    },[]);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">

                    {/* Desktop nav */}
                    <div className="navbar-center desktop-menu">
                        <ul>
                            <li><a aria-label='button to homepage' href="/#homepage">דף הבית</a></li>
                            <li><a aria-label='button to about-page' href="/#about">קצת עלינו</a></li>
                            <li><a aria-label='button to services page' href="/#services">השירותים שלנו</a></li>
                            <li><a aria-label='button to portfolio' href="/#portfolio">הלקוחות שלנו</a></li>
                            <li aria-label='button to contact form' className="contact-button"><a href="/#contact">צרו קשר</a></li>
                        </ul>
                    </div>

                    <div className="navbar-left">
                        <img src="/archweb_logo_no_bg.png" alt="Company Logo" className="logo" />
                    </div>

                    {/* Mobile menu button */}
                    <div className="hamburger-menu" onClick={toggleSidebar}>
                        ☰
                    </div>
                </div>
            </nav>

            {/* Sidebar menu */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                <li><a aria-label='button to homepage' href="/#homepage">דף הבית</a></li>
                            <li><a aria-label='button to about-page' href="/#about">קצת עלינו</a></li>
                            <li><a aria-label='button to services page' href="/#services">השירותים שלנו</a></li>
                            <li><a aria-label='button to portfolio' href="/#portfolio">הלקוחות שלנו</a></li>
                            <li aria-label='button to contact form' className="contact-button"><a href="/#contact">צרו קשר</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;

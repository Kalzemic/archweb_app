"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "@/Styles/Navbar.css";

const navigation = [
  { href: "/#homepage", label: "דף הבית" },
  { href: "/#about", label: "קצת עלינו" },
  { href: "/#services", label: "השירותים שלנו" },
  { href: "/#portfolio", label: "הפרויקטים שלנו" },
];

type NavbarProps = {
    alwaysColored?: boolean;
  };

export default function Navbar({
    alwaysColored = false,
  }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasPassedHero, setHasPassedHero] = useState(false);
  
    const showBackground =
      alwaysColored || hasPassedHero;
    
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("homepage");
  
    if (!hero) {
      return;
    }
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );
  
    observer.observe(hero);
  
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`navbar ${isScrolled ? "navbar--scrolled" : "" } ${
            showBackground ? "navbar--scrolled" : ""
          }`}
        aria-label="ניווט ראשי"
      >
        <div className="navbar-content">
          <Link
            href="/#homepage"
            className="navbar-logo"
            aria-label="ArchWeb, דף הבית"
          >
            <Image
              src="/archweb_logo_no_bg.png"
              alt=""
              width={64}
              height={64}
              priority
            />
          </Link>

          <ul className="desktop-navigation">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/#contact" className="navbar-contact">
            צרו קשר
          </Link>

          <button
            type="button"
            className="menu-button"
            aria-label={isOpen ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span aria-hidden="true">
              {isOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${isOpen ? "mobile-navigation--open" : ""}`}
      >
        <ul>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/#contact"
              className="mobile-contact"
              onClick={closeMenu}
            >
              צרו קשר
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
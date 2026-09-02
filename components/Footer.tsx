import Link from "next/link";
import "@/Styles/Footer.css";

const footerNavigation = [
  { href: "/#homepage", label: "דף הבית" },
  { href: "/#about", label: "קצת עלינו" },
  { href: "/#services", label: "השירותים שלנו" },
  { href: "/#portfolio", label: "הפרויקטים שלנו" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link
            href="/#homepage"
            className="footer-logo english-display"
          >
            ArchWeb
          </Link>

          <p>
            פיתוח מוצרים דיגיטליים בהתאמה לעסק, למשתמשים
            ולמטרות הפרויקט.
          </p>
        </div>

        <nav className="footer-navigation" aria-label="ניווט תחתון">
          <h2>ניווט</h2>

          <ul>
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact">
          <h2>יש לכם פרויקט?</h2>

          <p>
            ספרו לנו מה אתם רוצים לבנות ונבחן יחד את הדרך
            המתאימה להתחיל.
          </p>

          <Link href="/#contact" className="footer-contact-link">
            צרו קשר
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} ArchWeb. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
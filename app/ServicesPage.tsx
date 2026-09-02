import Image from "next/image";
import Link from "next/link";
import "@/Styles/ServicesPage.css";


const services = [
  {
    url: "landing-pages",
    name: "דפי נחיתה",
    description:
      "עמודים ממוקדים לקמפיינים, השקות ואיסוף לידים, עם דגש על מסר ברור והנעה לפעולה.",
  },
  {
    url: "interactive-websites",
    name: "אתרים אינטראקטיביים",
    description:
      "אתרי תדמית שמחברים בין עיצוב, תוכן ואינטראקציה כדי ליצור חוויה שמייצגת את העסק.",
  },
  {
    url: "web-applications",
    name: "אפליקציות רשת",
    description:
      "מערכות מותאמות אישית הכוללות ממשקי ניהול, אזורים אישיים ותהליכים עסקיים מורכבים.",
  },
  {
    url: "automation-tools",
    name: "כלי אוטומציה",
    description:
      "חיבור בין מערכות וצמצום פעולות ידניות כדי לחסוך זמן, למנוע טעויות ולייעל את העבודה.",
  },
  {
    url: "ai-agents",
    name: "פתרונות AI",
    description:
      "שילוב מודלים חכמים בחיפוש, ניתוח מידע, שירות לקוחות ותהליכים פנימיים.",
  },
];


export default function ServicesPage() {
  return (
    <div className="services-page">
      <header className="services-header">
        <p className="services-kicker">השירותים שלנו</p>

  <h2 className="english-display">
    What We Build
  </h2>

  <p className="services-introduction">
    אנחנו מתכננים ומפתחים מוצרים דיגיטליים בהתאם למטרות,
    לקהל ולתהליכי העבודה של כל עסק.
  </p>
</header>

      <div className="services-list">
        {services.map((service, index) => (
          <Link
            href={`/services/${service.url}`}
            className="service-item"
            key={service.url}
          >
            <span className="service-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="service-copy">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <span className="service-link-text">לפרטים נוספים</span>
            </div>

            <div className="service-media">
              <Image
                src={`/services/${service.url}.jpg`}
                alt=""
                fill
                sizes="(max-width: 800px) 100vw, 240px"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
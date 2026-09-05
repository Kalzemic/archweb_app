import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

import "@/Styles/Portfolio.css";

export default function Portfolio() {
  return (
    <section
      className="portfolio-page"
      id="portfolio"
      dir="rtl"
    >
      <header className="portfolio-header">


        <h2
          className="english-display"
          dir="ltr"
        >
          Selected Work
        </h2>
        <p className="portfolio-kicker">
          הפרויקטים שלנו
        </p>
        <p>
          מבחר מוצרים ואתרים שפיתחנו עבור עסקים
          בתחומים שונים, משלב הרעיון ועד למוצר פעיל.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((project) => {
          const hasProjectImage = project.image !== null;
          const visualPath = project.image ?? project.logo;

          return (
            <Link
              href={`/projects/${project.slug}`}
              className="project-card"
              key={project.slug}
            >
              <div
                className={`project-visual ${
                  hasProjectImage
                    ? ""
                    : "project-visual--logo"
                }`}
                style={{
                  backgroundColor: project.accentColor,
                }}
              >
                <Image
                  src={visualPath}
                  alt={`${project.displayName} project`}
                  fill
                  className={
                    project.imageFit === "contain"
                      ? "project-image--contain"
                      : "project-image--cover"
                  }
                  sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw"
                />
              </div>

              <div className="project-details">
                <h3>{project.displayName}</h3>
                <span>לצפייה בפרויקט</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
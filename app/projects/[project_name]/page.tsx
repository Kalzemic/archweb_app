import type { CSSProperties } from "react";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import { projects } from "@/data/projects";

import "@/Styles/Project.css";

type ProjectPageProps = {
  params: Promise<{
    project_name: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    project_name: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { project_name } = await params;

  const project = projects.find(
    (item) => item.slug === project_name
  );

  if (!project) {
    notFound();
  }

  const visual = project.image ?? project.logo;
  const usesLogo = project.image === null;

  return (
    <>
      <Navbar alwaysColored />

      <main
        className="project-detail"
        dir="rtl"
        style={
          {
            "--project-accent": project.accentColor,
          } as CSSProperties
        }
      >
        <section className="project-detail__intro">
          <div className="project-detail__container">
            <Link
              href="/#portfolio"
              className="project-detail__back"
            >
              חזרה לפרויקטים
            </Link>

            <p className="project-detail__category">
              {project.category}
            </p>

            <div className="project-detail__heading">
              <h1
                className="english-display project-detail__title"
                dir="ltr"
              >
                {project.displayName}
              </h1>

              <p className="project-detail__summary">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        <section className="project-detail__showcase">
          <div className="project-detail__container">
            <div
              className={`project-detail__media ${
                usesLogo
                  ? "project-detail__media--logo"
                  : ""
              }`}
            >
              <Image
                src={visual}
                alt={`תצוגה של ${project.displayName}`}
                fill
                className={
                  project.imageFit === "contain"
                    ? "project-detail__image--contain"
                    : "project-detail__image--cover"
                }
                sizes="(max-width: 768px) 100vw, 864px"
                priority
              />
            </div>

            <div className="project-detail__overview">
              <div>
                <p className="project-detail__kicker">
                  על הפרויקט
                </p>

                <h2
                  className="english-display"
                  dir="ltr"
                >
                  Project Overview
                </h2>
              </div>

              <div className="project-detail__content">
                <p>{project.overview}</p>

                <div className="project-detail__services">
                  <h3>מה כלל הפרויקט</h3>

                  <ul>
                    {project.services.map((service) => (
                      <li key={service}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getService,
  services,
} from "@/data/services";

import "@/Styles/Service.css";

type ServicePageProps = {
  params: Promise<{
    service: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | ArchWeb`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: ServicePageProps) {
  const { service: slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar alwaysColored />

      <main className="service-page">
  <div className="service-layout">
    <div className="service-media">
      <Image
        src={service.image}
        alt=""
        fill
        priority
        sizes="(max-width: 800px) 100vw, 45vw"
      />
    </div>

    <div className="service-content">
      <Link href="/#services" className="service-back-link">
        חזרה לשירותים
      </Link>

      <p className="service-kicker">{service.name}</p>

      <h1 className="english-display">
        {service.englishName}
      </h1>

      <p className="service-summary">
        {service.overview}
      </p>

      <ul className="service-highlights">
        {service.deliverables.slice(0, 4).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <Link href="/#contact" className="button-primary">
        דברו איתנו על הפרויקט
      </Link>
    </div>
  </div>
</main>

      <Footer />
    </>
  );
}
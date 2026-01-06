"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Youtube,
  ArrowUpRight,
  Globe,
} from "lucide-react";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  variant = "default",
  size = "sm",
  onClick,
  asChild,
  className = "",
}: any) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses =
    variant === "outline"
      ? "border-2 border-gray-700 bg-transparent hover:bg-gray-800 hover:text-white dark:border-gray-400 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
      : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl dark:from-blue-500 dark:to-cyan-500";
  const sizeClasses = size === "sm" ? "h-9 px-4 text-sm" : "h-11 px-6";

  if (asChild && children?.type === "a") {
    return (
      <a
        {...children.props}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
        onClick={onClick}
      >
        {children.props.children}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Markdown = ({ children, className }: any) => {
  return <div className={className}>{children}</div>;
};

export function ProjectCard({
  title,
  href,
  description,
  dates,
  link,
  image,
  video,
  links,
  className,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.div
      ref={ref}
      className="group mb-6 sm:mb-8 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section
        className="relative bg-white max-w-[70rem] border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 ease-in-out dark:bg-gradient-to-br dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 dark:border-slate-700 dark:hover:border-cyan-500 dark:hover:shadow-cyan-500/30 cursor-pointer group-hover:scale-[1.005]"
        onClick={handleClick}
      >
        {/* Gradient Overlay Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <div className="flex flex-col lg:flex-row">
          {/* Image/Video Section */}
          <div className="relative w-full lg:w-[45%] lg:order-2 overflow-hidden">
            {/* Date Badge */}
            <div className="absolute top-4 right-4 z-10 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              {dates}
            </div>

            {image && (
              <div className="relative h-64 sm:h-72 lg:h-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
  const img = e.currentTarget as HTMLImageElement;
  img.src =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23334155" width="800" height="600"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="32" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' +
    title +
    '%3C/text%3E%3C/svg%3E';
}}

                />
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            )}

            {video && (
              <div className="relative h-64 sm:h-72 lg:h-full overflow-hidden">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            )}

            {/* Hover Arrow Indicator */}
            <div className="absolute bottom-4 right-4 bg-cyan-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500 ease-out shadow-lg">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 lg:w-[55%] lg:order-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-500">
                {title}
              </h3>

              <Markdown className="leading-relaxed text-gray-600 dark:text-gray-300 mb-6 prose max-w-full text-pretty font-sans text-base sm:text-lg dark:prose-invert line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                {description}
              </Markdown>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-auto pt-4">
              {link && (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="text-sm font-semibold"
                  onClick={(e) => e.stopPropagation()}
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" /> View Live
                  </a>
                </Button>
              )}

              {links &&
                links.length > 0 &&
                links.map((linkItem, idx) => {
                  if (
                    linkItem.type.toLowerCase().includes("demo") ||
                    linkItem.type.toLowerCase().includes("video")
                  ) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="mr-2 w-4 h-4" /> Demo
                        </a>
                      </Button>
                    );
                  } else if (linkItem.type.toLowerCase().includes("github")) {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="outline"
                        size="sm"
                        className="text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 w-4 h-4" /> GitHub
                        </a>
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        key={idx}
                        asChild
                        variant="default"
                        size="sm"
                        className="text-sm font-semibold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a
                          href={linkItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 w-4 h-4" />{" "}
                          {linkItem.type}
                        </a>
                      </Button>
                    );
                  }
                })}
            </div>

            {/* View Details Hint */}
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Click to view full project details →
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

// Demo
export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-stack applications showcasing modern web development
          </p>
        </div>

        <ProjectCard
          title="RideBee - Car Rental System"
          description="A full-stack car rental platform with Angular and Spring Boot, enabling customers to browse cars, search listings, and book rentals with separate admin and customer dashboards secured by JWT authentication."
          dates="2025"
          link="https://github.com/shruti03072004/Ridebee.git"
          image="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop"
          links={[
            {
              icon: null,
              type: "GitHub",
              href: "https://github.com/shruti03072004/Ridebee.git",
            },
            {
              icon: null,
              type: "Demo",
              href: "https://github.com/shruti03072004/Ridebee.git",
            },
          ]}
          onClick={() => alert("Open project details modal")}
        />

        <ProjectCard
          title="Infinite StudioX - Agency Website"
          description="A modern agency website featuring multiple sections including Home, About, Services, Projects, Pricing, Team, Contact, and a Demo Booking form with Formspree integration for real-time email delivery."
          dates="2025"
          link="https://infinite-studiox.vercel.app/"
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
          links={[
            {
              icon: null,
              type: "GitHub",
              href: "https://github.com/shruti03072004/Agency-website-.git",
            },
            {
              icon: null,
              type: "Demo",
              href: "https://infinite-studiox.vercel.app/",
            },
          ]}
          onClick={() => alert("Open project details modal")}
        />

        <ProjectCard
          title="ClimatePilot - Weather App"
          description="A JavaScript-based weather application providing real-time weather updates using OpenWeather API, displaying temperature, humidity, wind speed, and dynamic weather icons with clean, responsive interface."
          dates="2023"
          link="https://climatepilot.netlify.app/"
          video="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          links={[
            {
              icon: null,
              type: "GitHub",
              href: "https://github.com/shruti03072004/ClimatePilot-Weather-Project.git",
            },
            {
              icon: null,
              type: "Demo",
              href: "https://climatepilot.netlify.app/",
            },
          ]}
          onClick={() => alert("Open project details modal")}
        />
      </div>
    </div>
  );
}

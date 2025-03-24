
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

// Define project data
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "A complete overhaul of an online shopping experience focusing on simplicity and conversion.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    link: "#",
    size: "large" as const,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "A clean, intuitive banking application designed for the modern user.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "#",
    size: "small" as const,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A minimal portfolio for a photographer showcasing their work.",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    link: "#",
    size: "medium" as const,
  },
  {
    id: 4,
    title: "Travel Blog",
    description: "A minimalist travel blog with a focus on photography and storytelling.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    link: "#",
    size: "medium" as const,
  },
  {
    id: 5,
    title: "Smart Home Dashboard",
    description: "An elegant interface for controlling smart home devices.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    link: "#",
    size: "small" as const,
  },
];

const BentoGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const cards = document.querySelectorAll(".bento-card");
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold animate-slide-in">Selected Projects</h2>
          </div>
          <div className="overflow-hidden">
            <p className="text-neutral-600 mt-4 max-w-xl animate-slide-in" style={{ animationDelay: "0.1s" }}>
              A curated selection of my recent work across user interface design and front-end development.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
              size={project.size}
              className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;


import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

// Define project data
const projects = [
  {
    id: 1,
    title: "StocksGod",
    description: "AI-powered stock market platform for real-time news, IPO GMP analysis, and stock price predictions.",
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/yourusername/stocksgod",
    size: "large" as const,
  },
  {
    id: 2,
    title: "Edutech",
    description: "Interactive e-learning platform with tutorial videos on HTML, CSS, JavaScript, ML, and Deep Learning.",
    imageSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/yourusername/edutech",
    size: "medium" as const,
  },
  {
    id: 3,
    title: "Suraksha AI",
    description: "Real-time object detection and analysis using YOLOv8, with Flask-based API.",
    imageSrc: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/yourusername/suraksha-ai",
    size: "medium" as const,
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
            <h2 className="text-2xl md:text-3xl font-bold animate-slide-in">Projects</h2>
          </div>
          <div className="overflow-hidden">
            <p className="text-neutral-600 mt-4 max-w-xl animate-slide-in" style={{ animationDelay: "0.1s" }}>
              A selection of my projects in AI/ML, full-stack development, and cloud technologies.
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

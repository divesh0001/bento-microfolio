
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  techStack?: string;
  liveDemo?: string;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
  size?: "small" | "medium" | "large";
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  link,
  techStack,
  liveDemo,
  className,
  imageClassName,
  contentClassName,
  size = "medium",
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.boxShadow = `0 10px 30px -5px rgba(0, 0, 0, 0.2), 0 0 5px rgba(0, 0, 0, 0.05)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    cardRef.current.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    setIsHovered(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  const sizeClasses = {
    small: "row-span-1 col-span-1",
    medium: "row-span-1 col-span-2",
    large: "row-span-2 col-span-2",
  };
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative bento-card overflow-hidden rounded-2xl transition-all duration-500 ease-out",
        "bg-white border border-gray-100 shadow-sm",
        "transform transition-transform duration-300",
        sizeClasses[size],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      
      <div 
        className={cn(
          "absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500",
          isHovered ? "scale-105" : "scale-100",
          imageClassName
        )}
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      <div 
        className={cn(
          "relative z-20 h-full flex flex-col justify-end p-6 text-white transform transition-transform duration-300",
          contentClassName
        )}
      >
        <h3 
          className={cn(
            "text-xl font-semibold mb-2 opacity-0 translate-y-4 transition-all duration-300 delay-100",
            isHovered ? "opacity-100 translate-y-0" : ""
          )}
        >
          {title}
        </h3>
        <p 
          className={cn(
            "text-sm opacity-0 translate-y-4 transition-all duration-300 delay-150 line-clamp-2",
            isHovered ? "opacity-100 translate-y-0" : ""
          )}
        >
          {description}
        </p>
        
        {techStack && (
          <p 
            className={cn(
              "text-xs mt-2 opacity-0 translate-y-4 transition-all duration-300 delay-200 text-gray-300",
              isHovered ? "opacity-100 translate-y-0" : ""
            )}
          >
            <span className="font-semibold">Tech:</span> {techStack}
          </p>
        )}
        
        <div 
          className={cn(
            "mt-4 flex gap-3 opacity-0 translate-y-4 transition-all duration-300 delay-250",
            isHovered ? "opacity-100 translate-y-0" : ""
          )}
        >
          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
          >
            <span>GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
          
          {liveDemo && (
            <a 
              href={liveDemo} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
            >
              <span>Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

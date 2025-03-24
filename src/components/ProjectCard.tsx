
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
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
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    setIsHovered(false);
  };
  
  const sizeClasses = {
    small: "row-span-1 col-span-1",
    medium: "row-span-1 col-span-2",
    large: "row-span-2 col-span-2",
  };
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative bento-card overflow-hidden transition-all duration-500 ease-out",
        sizeClasses[size],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
      
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
            "text-sm opacity-0 translate-y-4 transition-all duration-300 delay-150",
            isHovered ? "opacity-100 translate-y-0" : ""
          )}
        >
          {description}
        </p>
        <a 
          href={link} 
          className={cn(
            "mt-4 inline-flex items-center gap-1 text-sm opacity-0 translate-y-4 transition-all duration-300 delay-200",
            isHovered ? "opacity-100 translate-y-0" : ""
          )}
        >
          <span>View Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;


import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = textRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      textRef.current.style.setProperty('--x', `${x}px`);
      textRef.current.style.setProperty('--y', `${y}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="overflow-hidden">
          <p className="text-sm md:text-base text-neutral-600 animate-slide-in">
            Frontend Developer & UI/UX Designer
          </p>
        </div>
        
        <div className="overflow-hidden">
          <h1 
            ref={textRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight animate-slide-in"
            style={{
              animationDelay: '0.1s',
              backgroundImage: 'radial-gradient(circle at var(--x, 0) var(--y, 0), #333 0%, #000 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'background-position 0.2s ease-out',
            }}
          >
            Crafting digital experiences with precision & purpose
          </h1>
        </div>
        
        <div className="overflow-hidden">
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
            I design and develop minimalist interfaces that prioritize user experience, focusing on what truly matters.
          </p>
        </div>
        
        <div className="pt-4 animate-slide-in" style={{ animationDelay: '0.3s' }}>
          <a 
            href="#projects" 
            className={cn(
              "inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full",
              "transition-all duration-300 hover:gap-3"
            )}
          >
            <span>View Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

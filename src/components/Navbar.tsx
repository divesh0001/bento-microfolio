
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Resume from "@/pages/Resume";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = ["Projects", "About", "Contact"];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 text-lg font-medium transition-opacity hover:opacity-80"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/lovable-uploads/5ee6d352-d1fd-4479-9b08-5d986b38b6fc.png" alt="Divesh Saini" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
          Divesh Saini
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm opacity-70 hover:opacity-100 transition-opacity link-underline"
            >
              {item}
            </a>
          ))}
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-sm bg-black text-white px-4 py-2 rounded-full transition-opacity hover:opacity-90">
                Resume
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-3xl overflow-y-auto">
              <div className="py-6">
                <Resume />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
        <button 
          className="md:hidden z-50" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>
        
        {/* Mobile menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white flex flex-col justify-center items-center transition-all duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium"
                onClick={toggleMobileMenu}
              >
                {item}
              </a>
            ))}
            <Sheet>
              <SheetTrigger asChild>
                <button 
                  className="text-lg bg-black text-white px-6 py-2 rounded-full"
                  onClick={toggleMobileMenu}
                >
                  Resume
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-3xl overflow-y-auto">
                <div className="py-6">
                  <Resume />
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

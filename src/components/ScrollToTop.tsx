import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

// Custom CSS keyframes and responsive styles
const bounceStyle = `
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* Responsive styles for the button */
.scroll-to-top-btn {
  /* Base sizes for desktop */
  width: 3rem; /* 48px */
  height: 3rem; /* 48px */
  bottom: 2rem; /* 32px */
  right: 2rem; /* 32px */
}

/* Tablet and smaller devices */
@media (max-width: 768px) {
  .scroll-to-top-btn {
    width: 2.75rem; /* 44px */
    height: 2.75rem; /* 44px */
    bottom: 1.5rem; /* 24px */
    right: 1.5rem; /* 24px */
  }
}

/* Mobile devices */
@media (max-width: 480px) {
  .scroll-to-top-btn {
    width: 2.5rem; /* 40px */
    height: 2.5rem; /* 40px */
    bottom: 1.25rem; /* 20px */
    right: 1.25rem; /* 20px */
  }
}

/* Extra small devices */
@media (max-width: 320px) {
  .scroll-to-top-btn {
    width: 2.25rem; /* 36px */
    height: 2.25rem; /* 36px */
    bottom: 1rem; /* 16px */
    right: 1rem; /* 16px */
  }
}

/* High zoom levels - smaller button */
@media (max-width: 600px) and (max-height: 400px) {
  .scroll-to-top-btn {
    width: 2rem; /* 32px */
    height: 2rem; /* 32px */
    bottom: 0.75rem; /* 12px */
    right: 0.75rem; /* 12px */
  }
}
`;

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
      // Responsive threshold based on screen size
      const threshold = window.innerWidth < 768 ? 800 : 1200;
      
      if (document.documentElement.scrollTop > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    window.addEventListener('resize', toggleVisibility, { passive: true });
    toggleVisibility();
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Insert keyframes and responsive styles into document */}
      <style>{bounceStyle}</style>

      <button
        onClick={scrollToTop}
        className={`
          scroll-to-top-btn
          fixed z-100
          bg-green-700 hover:bg-green-900 
          text-white 
          rounded-full shadow-lg hover:shadow-xl
          flex items-center justify-center cursor-pointer
          border-2 border-white hover:border-green-200
          transition-all duration-300 ease-in-out
          hover:scale-130
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
        style={{
          animation: isVisible ? 'bounce-slow 2s infinite' : 'none'
        }}
        aria-label="Scroll to top"
        title="Back to top"
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </>
  );
};

export default ScrollToTop;
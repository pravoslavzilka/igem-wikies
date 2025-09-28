import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Total document height
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      
      // Current scroll position
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Viewport height
      const windowHeight = window.innerHeight;
      
      // Distance from the bottom of the page
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
      // Show the button if we are less than 800px from the bottom and not at the very top
      if (distanceFromBottom <= 1200 && scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listeners with passive flag for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    window.addEventListener('resize', toggleVisibility, { passive: true });
    
    // Initial call
    toggleVisibility();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // If not visible, render nothing
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50
        w-12 h-12 bg-white hover:bg-green-50 
        text-green-600 hover:text-green-800
        rounded-full shadow-lg hover:shadow-xl
        flex items-center justify-center cursor-pointer
        border-2 border-green-200 hover:border-green-400
        transition-all duration-300 ease-in-out
        hover:scale-105
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
};

export default ScrollToTop;

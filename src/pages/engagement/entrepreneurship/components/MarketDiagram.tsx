import React, { useEffect, useRef, useState } from 'react';

const MarketDiagram: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (diagramRef.current) {
      observer.observe(diagramRef.current);
    }

    return () => {
      if (diagramRef.current) {
        observer.unobserve(diagramRef.current);
      }
    };
  }, []);

  return (
    <div ref={diagramRef} className="flex flex-col items-center w-full max-w-md mx-auto">
      {/* SVG Diagram */}
      <div className="relative w-full aspect-square">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* TAM - Outer Circle */}
          <circle
            cx="200"
            cy="220"
            r="180"
            fill="#2d5016"
            style={{
              transformOrigin: '200px 220px',
              animation: isVisible ? 'scaleIn 0.8s ease-out forwards' : 'none',
              transform: isVisible ? 'scale(1)' : 'scale(0)',
              opacity: isVisible ? 1 : 0
            }}
          />
          
          {/* SAM - Middle Circle */}
          <circle
            cx="200"
            cy="280"
            r="120"
            fill="#5a7f3a"
            style={{
              transformOrigin: '200px 280px',
              animation: isVisible ? 'scaleIn 1s ease-out 0.2s forwards' : 'none',
              transform: isVisible ? 'scale(1)' : 'scale(0)',
              opacity: 0
            }}
          />
          
          {/* SOM - Inner Circle */}
          <circle
            cx="200"
            cy="330"
            r="70"
            fill="#8fb569"
            style={{
              transformOrigin: '200px 330px',
              animation: isVisible ? 'scaleIn 1.2s ease-out 0.4s forwards' : 'none',
              transform: isVisible ? 'scale(1)' : 'scale(0)',
              opacity: 0
            }}
          />
          
          {/* TAM Label */}
          <text
            x="200"
            y="70"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="bold"
            fontFamily="Space Grotesk, sans-serif"
            style={{
              animation: isVisible ? 'fadeIn 0.6s ease-out 0.6s forwards' : 'none',
              opacity: 0
            }}
          >
            TAM
          </text>
          
          {/* TAM Value */}
          <text
            x="200"
            y="105"
            textAnchor="middle"
            fill="white"
            fontSize="42"
            fontWeight="bold"
            fontFamily="Space Grotesk, sans-serif"
            style={{
              animation: isVisible ? 'fadeIn 0.6s ease-out 0.8s forwards' : 'none',
              opacity: 0
            }}
          >
            $309B
          </text>
          
          {/* SAM Label */}
          <text
            x="200"
            y="230"
            textAnchor="middle"
            fill="white"
            fontSize="20"
            fontWeight="bold"
            fontFamily="Space Grotesk, sans-serif"
            style={{
              animation: isVisible ? 'fadeIn 0.6s ease-out 1s forwards' : 'none',
              opacity: 0
            }}
          >
            SAM
          </text>
          
          {/* SAM Value */}
          <text
            x="200"
            y="260"
            textAnchor="middle"
            fill="white"
            fontSize="36"
            fontWeight="bold"
            fontFamily="Space Grotesk, sans-serif"
            style={{
              animation: isVisible ? 'fadeIn 0.6s ease-out 1.2s forwards' : 'none',
              opacity: 0
            }}
          >
            $34B
          </text>
          
          {/* SOM Label */}
          <text
            x="200"
            y="315"
            textAnchor="middle"
            fill="white"
            fontSize="18"
            fontWeight="bold"
            fontFamily="Space Grotesk, sans-serif"
            style={{
              animation: isVisible ? 'fadeIn 0.6s ease-out 1.4s forwards' : 'none',
              opacity: 0
            }}
          >
            SOM
          </text>
          
          {/* SOM Value */}
          <text
            x="200"
            y="345"
            textAnchor="middle"
            fill="white"
            fontSize="32"
            fontWeight="bold"
            fontFamily="Space Grotesk, sans-serif"
            style={{
              animation: isVisible ? 'fadeIn 0.6s ease-out 1.6s forwards' : 'none',
              opacity: 0
            }}
          >
            $2.7B
          </text>
        </svg>
      </div>
      
      {/* Legend */}
      <div 
        className="mt-6 text-center text-sm text-gray-700 space-y-1"
        style={{ 
          fontFamily: 'Urbanist, sans-serif',
          animation: isVisible ? 'fadeIn 0.6s ease-out 1.8s forwards' : 'none',
          opacity: 0
        }}
      >
        <p>TAM - global feed protein supplement market</p>
        <p>SAM - American cattle and swine feed protein supplement market</p>
        <p>SOM - Brazil cattle feed protein supplement market</p>
      </div>
      
      <style>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MarketDiagram;
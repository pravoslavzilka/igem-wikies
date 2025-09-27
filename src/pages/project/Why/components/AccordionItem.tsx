import React from 'react';
import { AccordionItemProps } from '../types';

// Jednoduchá funkcia na formátovanie
const formatText = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
};

const AccordionItem = ({ id, title, content, isActive, onClick, showContent = false }: AccordionItemProps) => (
  <div className="w-full">
    <div 
      className="flex items-center gap-4 md:gap-8 cursor-pointer py-2 transition-all duration-200"
      onClick={() => onClick(isActive ? null : id)}
    >
      <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
        {isActive ? (
          <div className="w-5 h-5 bg-green-800 flex items-center justify-center rounded-sm">
            <div className="w-2.5 h-0.5 bg-white"></div>
          </div>
        ) : (
          <div className="w-5 h-5 bg-gray-100 flex items-center justify-center rounded-sm">
            <div className="w-3 h-3 text-gray-500">
              <svg viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        )}
      </div>
      <h3 
        className={`text-xl sm:text-2xl md:text-3xl font-semibold leading-tight ${isActive ? 'text-green-800' : 'text-gray-900'} transition-colors duration-200`}
        style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600, lineHeight: '140%' }}
      >
        {title}
      </h3>
    </div>
    
    {isActive && showContent && (
      <div className="ml-9 md:ml-13 mt-4 md:mt-6 space-y-4 md:space-y-6 animate-in slide-in-from-top-2 duration-300">
        {content.map((paragraph: string, index: number) => (
          <p 
            key={index}
            className="text-justify leading-relaxed text-sm sm:text-base max-w-none lg:max-w-lg text-gray-700"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif', 
              lineHeight: '168%',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
            dangerouslySetInnerHTML={{ __html: formatText(paragraph) }}
          />
        ))}
      </div>
    )}
  </div>
);

export default AccordionItem;
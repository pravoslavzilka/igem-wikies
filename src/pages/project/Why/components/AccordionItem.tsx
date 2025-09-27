import { AccordionItemProps } from '../types';

const AccordionItem = ({ id, title, content, isActive, onClick, showContent = false }: AccordionItemProps) => (
  <div className="w-full">
    <div 
      className="flex items-center gap-8 cursor-pointer py-2"
      onClick={() => onClick(isActive ? null : id)}
    >
      <div className="flex items-center justify-center w-5 h-5">
        {isActive ? (
          <div className="w-5 h-5 bg-green-800 flex items-center justify-center">
            <div className="w-2.5 h-0.5 bg-white"></div>
          </div>
        ) : (
          <div className="w-5 h-5 bg-gray-100 flex items-center justify-center">
            <div className="w-3 h-3 text-gray-500">
              <svg viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        )}
      </div>
      <h3 
        className={`text-3xl font-semibold leading-tight ${isActive ? 'text-green-800' : 'text-gray-900'}`}
        style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600, fontSize: '32px', lineHeight: '140%' }}
      >
        {title}
      </h3>
    </div>
    
    {isActive && showContent && (
      <div className="ml-13 mt-6 space-y-6">
        {content.map((paragraph: string, index: number) => (
          <p 
            key={index}
            className="text-gray-700 leading-relaxed max-w-lg"
            style={{ 
              fontFamily: 'Space Grotesk, sans-serif', 
              fontSize: '16px', 
              lineHeight: '168%',
              color: 'rgba(23, 31, 22, 0.75)'
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    )}
  </div>
);

export default AccordionItem;
import React from 'react';

const ExperimentSteps: React.FC = () => {
  return (
    <section className="w-full py-0 lg:py-0 flex justify-center">
      <div 
        className="w-full max-w-6xl overflow-hidden"
        style={{ aspectRatio: '16/9', minHeight: '300px', maxHeight: '600px' }}
      >
        <img 
          src="https://static.igem.wiki/teams/5642/images/how/howlanding/2025-09-27-110953.webp" 
          alt="Large Experiment Image" 
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/800x450/f3f4f6/9ca3af?text=Image+Not+Found";
          }}
        />
      </div>
    </section>
  );
};

export default ExperimentSteps;
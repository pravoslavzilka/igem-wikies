// src/pages/project/What/components/ProblemsSection.tsx
import React from 'react';

interface ProblemCardProps {
  title: string;
  image: string;
  quote: string;
  author: string;
  avatar?: string; // pridane
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, image, quote, author, avatar }) => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 w-full max-w-sm mx-auto">
      {/* Title */}
      <h3 
        className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[120%] text-center text-black px-2"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        {title}
      </h3>

      {/* Image */}
      <div className="w-full aspect-[352/220] rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quote container */}
      <div className="flex flex-row items-start gap-3 sm:gap-5 w-full">
        {/* Avatar */}
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0 mt-1"
          />
        ) : (
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded flex-shrink-0 mt-1"></div>
        )}
        
        {/* Quote and author */}
        <div className="flex flex-col justify-start items-start gap-2 sm:gap-3 flex-grow min-w-0">
          <p 
            className="w-full text-sm leading-[148%] text-black"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            "{quote}"
          </p>
          <p 
            className="text-sm font-bold leading-[120%] text-black"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {author}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      title: "High protein feed costs and reliance on import",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-soybean-feed.webp",
      quote: "Soybean is an amazing source of protein. I wish I could afford more!",
      author: "Rudolf Repisky",
      avatar: "https://static.igem.wiki/teams/5642/images/what/rudolf.webp"
    },
    {
      title: "Deforestation caused by protein crops",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-deforestation.webp",
      quote: "15 millions hectares of Brazil’s tropical savannas of Cerrado is lost due to soybean fields, but over the past 50 years, agribusiness has greatly improved quality of life in the region",
      author: "Prof. Carlos Klink",
      avatar: "https://static.igem.wiki/teams/5642/images/what/carlos-klink.webp"
    },
    {
      title: "Nitrogen runoffs and manure utilization",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-nitrogen.webp",
      quote: "We tend to think manure is free fertilizer, but in reality, much of the nitrogen just disappears into the air or water. It's money and nutrients lost.",
      author: "Ing. Jakub Neužil",
      avatar: "https://static.igem.wiki/teams/5642/images/people/jakub-neuzil.jpg"
    }
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout - responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 text-justify">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              title={problem.title}
              image={problem.image}
              quote={problem.quote}
              author={problem.author}
              avatar={problem.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;

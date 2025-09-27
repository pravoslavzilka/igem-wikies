import React from 'react';

interface ProblemCardProps {
  title: string;
  image: string;
  quote: string;
  author: string;
  height?: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, image, quote, author, height = 397 }) => {
  // Dynamicky výpočet výšky quote kontajnera na základe dĺžky textu
  const isLongQuote = quote.length > 80;
  const quoteContainerHeight = isLongQuote ? "auto" : "h-[71px]";
  const quoteTextHeight = isLongQuote ? "auto" : "h-[42px]";
  
  return (
    <div className={`flex flex-col items-center px-4 gap-6 w-[384px]`} style={{ height: `${height}px` }}>
      {/* Title */}
      <h3 
        className="w-[352px] h-[58px] text-2xl font-semibold leading-[120%] text-center text-black"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        {title}
      </h3>

      {/* Image */}
      <div className="w-[352px] h-[220px] rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quote container - dynamická výška */}
      <div className={`flex flex-row items-start gap-5 w-[352px] ${quoteContainerHeight} min-h-[71px]`}>
        {/* Avatar placeholder */}
        <div className="w-12 h-12 bg-gray-100 rounded flex-shrink-0 mt-1"></div>
        
        {/* Quote and author */}
        <div className="flex flex-col justify-start items-start gap-3 w-[284px] flex-grow">
          <p 
            className={`w-full ${quoteTextHeight} text-sm leading-[148%] text-black`}
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
      author: "Rudolf Repiský",
      height: 397
    },
    {
      title: "Deforestation caused by protein crops",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-deforestation.webp",
      quote: "Our land was taken from us and turned into a one giant soy field",
      author: "Prof. Carlos Klink",
      height: 397
    },
    {
      title: "Nitrogen runoffs and manure utilization",
      image: "https://static.igem.wiki/teams/5642/images/what/problem-nitrogen.webp",
      quote: "We tend to think manure is free fertilizer, but in reality, much of the nitrogen just disappears into the air or water. It's money and nutrients lost.",
      author: "Ing. Jakub Neužil",
      height: 460 // Zvýšená výška pre dlhší quote
    }
  ];

  return (
    <section className="flex flex-row items-start px-32 py-10 gap-4 w-full bg-white">
      {problems.map((problem, index) => (
        <ProblemCard
          key={index}
          title={problem.title}
          image={problem.image}
          quote={problem.quote}
          author={problem.author}
          height={problem.height}
        />
      ))}
    </section>
  );
};

export default ProblemsSection;
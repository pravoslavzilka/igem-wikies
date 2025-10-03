// src/pages/engagement/entrepreneurship/components/IgemStartupSection.tsx
import React from 'react';

const IgemStartupSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-white">
      {/* Header */}
      <h2 
        className="text-6xl font-bold mb-12"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        iGEM Startup Showcase
      </h2>

      {/* First paragraph */}
      <div 
        className="text-justify text-gray-800 leading-relaxed mb-8 text-lg"
        style={{ fontFamily: 'Urbanist, sans-serif' }}
      >
        <p className="mb-4">
          During the Venture Creation Labs from iGEM, we created{' '}
          <span className="font-bold">business model canvas</span>, risk assessment of our project, planned it in the form of{' '}
          <span className="font-bold">GANTT chart</span>,{' '}
          <span className="font-bold">prepared technology overview</span>, as well as{' '}
          <span className="font-bold">protection and collaboration strategy</span>. We pitched this concept again, now with some data and analyses supporting it and were awarded the{' '}
          <span className="font-bold">Grand Prize in iGEM Startups VCL in EMEA region</span>. As a result, we were invited to pitch at iGEM Grand Jamboree 2024 as a part of{' '}
          <span className="font-bold">Startup Showcase</span> cohort.
        </p>
      </div>

      {/* Text with Image (Environment track) */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
        <div 
          className="text-justify text-gray-800 leading-relaxed text-lg"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p className="mb-4">
            We were preparing for the pitch for about a month and were looking forward a lot for the Jamboree. We were placed to the{' '}
            <span className="font-bold">Environment track</span> and competed against four other teams.
          </p>
          
          <p className="mb-4">
            We managed to{' '}
            <span className="font-bold">win this track</span> and were chosen as one of the three finalists. On the last day of the Jamboree, we stepped on the stage with{' '}
            <span className="font-bold">ClearMark Biosciences</span> and{' '}
            <span className="font-bold">Chloropept</span> to find out{' '}
            <span className="font-bold">we finished as a RunnerUp</span>.
          </p>
        </div>

        <div className="flex justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck2-2.webp" 
            alt="iGEM Jamboree presentation on stage"
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      {/* Image with Text (Feedback) */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center">
          <img 
            src="https://static.igem.wiki/teams/5642/images/engagement/entrepreneurship/nitroduck2-1.webp" 
            alt="Team photo at iGEM Jamboree"
            className="w-full h-auto rounded-3xl"
          />
        </div>

        <div 
          className="text-justify text-gray-800 leading-relaxed text-lg"
          style={{ fontFamily: 'Urbanist, sans-serif' }}
        >
          <p className="mb-4">
            What was the most important for us was not the prize but the{' '}
            <span className="font-bold">support and immense amount of insights</span> we received throughout the event. You can read about it in the ideation part of human practices page.
          </p>
          
          <p>
            One of the most{' '}
            <span className="font-bold">important feedbacks</span> given to us was to do the proper unit economics{' '}
            <span className="font-bold">calculation</span> for the project to see, whether it is economically feasible. So we did so...
          </p>
        </div>
      </div>
    </section>
  );
};

export default IgemStartupSection;
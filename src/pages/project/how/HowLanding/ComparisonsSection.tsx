import React from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { pagesData } from "./data/pagesData";
import ComparisonCard from "./components/ComparisonCard";

interface ComparisonsSectionProps {
  transformationImageUrl?: string;
  promotersImageUrl?: string;
  cultivationImageUrl?: string;
  optimizationImageUrl?: string;
}

const ComparisonsSection: React.FC<ComparisonsSectionProps> = ({
  transformationImageUrl,
  promotersImageUrl,
  cultivationImageUrl,
  optimizationImageUrl
}) => {
  const imageUrls = [
    transformationImageUrl,
    promotersImageUrl,
    cultivationImageUrl,
    optimizationImageUrl
  ];

  return (
    <section className="flex flex-col items-center pt-0 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-8 lg:px-32 gap-6 sm:gap-8 lg:gap-10 w-full bg-white">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[1184px]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900">
        </h2>
      </div>

      {/* All Comparisons Stacked */}
      <div className="flex flex-col gap-8 w-full max-w-[1184px]">
        {pagesData.map((page, index) => (
          <div key={page.id} className="flex flex-col gap-2">
            {/* Page Title with Link - All Screens */}
            <div className="w-full text-center">
              <Link 
                to={page.pageUrl}
                onClick={() => window.scrollTo(0, 0)}
                className="group inline-flex items-center gap-2 text-2xl sm:text-3xl font-semibold text-[#779E45] hover:text-[#5d7a33] transition-colors uppercase"
              >
                {page.pageTitle}
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </Link>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-between items-center gap-4 h-[280px]">
              {/* Before Card */}
              <ComparisonCard
                type="before"
                time={page.beforeTime}
                description={page.beforeDescription}
                details={page.beforeDetails}
              />

              {/* Center Image */}
              <div className="w-[484px] h-[280px] rounded-xl flex items-center justify-center overflow-hidden">
                {imageUrls[index] ? (
                    <a
                      href={page.pageUrl}
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={imageUrls[index]}
                        alt={`${page.title} visualization`}
                        className="w-full h-full object-contain cursor-pointer transition-transform hover:scale-[1.02]"
                        onError={(e) => {
                          console.log(`Failed to load image for ${page.title}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </a>


                ) : (
                  <div className="text-gray-500 text-lg bg-gradient-to-r from-green-50 to-green-100 w-full h-full flex items-center justify-center">
                    [{page.title} Visualization]
                  </div>
                )}
              </div>

              {/* After Card */}
              <ComparisonCard
                type="after"
                time={page.afterTime}
                description={page.afterDescription}
                details={page.afterDetails}
                accentColor={page.accentColor}
              />
            </div>

            {/* Mobile & Tablet Layout */}
            <div className="flex flex-col lg:hidden gap-4">
              {/* Center Image First */}
              <div className="w-full max-w-[400px] mx-auto h-[240px] sm:h-[280px] rounded-xl flex items-center justify-center overflow-hidden">
                {imageUrls[index] ? (
                  <img 
                    src={imageUrls[index]} 
                    alt={`${page.title} visualization`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      console.log(`Failed to load image for ${page.title}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="text-gray-500 text-base bg-gradient-to-r from-green-50 to-green-100 w-full h-full flex items-center justify-center">
                    [{page.title} Visualization]
                  </div>
                )}
              </div>

              {/* Before and After Cards Side by Side */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <ComparisonCard
                  type="before"
                  time={page.beforeTime}
                  description={page.beforeDescription}
                  details={page.beforeDetails}
                />
                <ComparisonCard
                  type="after"
                  time={page.afterTime}
                  description={page.afterDescription}
                  details={page.afterDetails}
                  accentColor={page.accentColor}
                />
              </div>
            </div>

            {/* Separator between sections (except last one) */}
            {index < pagesData.length - 1 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-4"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonsSection;
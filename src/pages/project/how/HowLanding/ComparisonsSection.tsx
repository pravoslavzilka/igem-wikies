import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pagesData } from "./data/pagesData";
import ComparisonCard from "./components/ComparisonCard";
import TabNavigation from "./components/TabNavigation";
import PageIndicators from "./components/PageIndicators";

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
  const [currentPage, setCurrentPage] = useState<number>(0);

  const tabNames = ["Transformation", "Promoters", "Cultivation", "Optimization"];
  
  const imageUrls = [
    transformationImageUrl,
    promotersImageUrl,
    cultivationImageUrl,
    optimizationImageUrl
  ];

  // Auto-scroll functionality
  const nextPageAuto = useCallback(() => {
    setCurrentPage((prev: number) => (prev + 1) % pagesData.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextPageAuto, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [nextPageAuto]);

  // Manual navigation with timer reset
  const nextPage = () => {
    setCurrentPage((prev: number) => (prev + 1) % pagesData.length);
  };

  const prevPage = () => {
    setCurrentPage((prev: number) => (prev - 1 + pagesData.length) % pagesData.length);
  };

  const goToPage = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <section className="flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-32 gap-6 sm:gap-8 lg:gap-12 w-full min-h-[642px] bg-white relative">
      {/* Header for Desktop ONLY */}
      <div className="hidden lg:flex justify-between items-center gap-4 sm:gap-6 w-full max-w-[1184px]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[120%] text-center text-black w-full sm:w-[284px]">
          Before
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[120%] text-center w-full sm:w-[484px]">
          Comparisons
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[120%] text-center text-black w-full sm:w-[284px]">
          Now
        </h2>
      </div>

      {/* Navigation Arrows - Hide on mobile */}
      <button
        onClick={prevPage}
        className="hidden sm:block absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-10 p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
      </button>

      <button
        onClick={nextPage}
        className="hidden sm:block absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-10 p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
      </button>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full max-w-[1184px]"
        >
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center gap-4 h-[280px]">
            <ComparisonCard
              type="before"
              time={pagesData[currentPage].beforeTime}
              description={pagesData[currentPage].beforeDescription}
              details={pagesData[currentPage].beforeDetails}
            />
            <div className="w-[484px] h-[280px] rounded-xl flex items-center justify-center overflow-hidden">
              {imageUrls[currentPage] ? (
                <img 
                  src={imageUrls[currentPage]} 
                  alt={`${pagesData[currentPage].title} visualization`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.log(`Failed to load image for ${pagesData[currentPage].title}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="text-gray-500 text-lg bg-gradient-to-r from-green-50 to-green-100 w-full h-full flex items-center justify-center">
                  [{pagesData[currentPage].title} Visualization]
                </div>
              )}
            </div>
            <ComparisonCard
              type="after"
              time={pagesData[currentPage].afterTime}
              description={pagesData[currentPage].afterDescription}
              details={pagesData[currentPage].afterDetails}
              accentColor={pagesData[currentPage].accentColor}
            />
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="flex flex-col lg:hidden gap-8 w-full">
            <h2 className="text-3xl font-semibold text-center text-black">
              Comparisons
            </h2>
          
            <div className="w-full max-w-[400px] mx-auto h-[240px] sm:h-[280px] rounded-xl flex items-center justify-center overflow-hidden">
              {imageUrls[currentPage] ? (
                <img 
                  src={imageUrls[currentPage]} 
                  alt={`${pagesData[currentPage].title} visualization`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    console.log(`Failed to load image for ${pagesData[currentPage].title}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="text-gray-500 text-base bg-gradient-to-r from-green-50 to-green-100 w-full h-full flex items-center justify-center">
                  [{pagesData[currentPage].title} Visualization]
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              {/* Before Column */}
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-semibold leading-[120%] text-center text-black">
                  Before
                </h2>
                <ComparisonCard
                  type="before"
                  time={pagesData[currentPage].beforeTime}
                  description={pagesData[currentPage].beforeDescription}
                  details={pagesData[currentPage].beforeDetails}
                />
              </div>

              {/* Now Column */}
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-2xl font-semibold leading-[120%] text-center text-black">
                  Now
                </h2>
                <ComparisonCard
                  type="after"
                  time={pagesData[currentPage].afterTime}
                  description={pagesData[currentPage].afterDescription}
                  details={pagesData[currentPage].afterDetails}
                  accentColor={pagesData[currentPage].accentColor}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tab Navigation */}
      <TabNavigation
        tabNames={tabNames}
        currentPage={currentPage}
        goToPage={goToPage}
      />

      {/* Page Indicators */}
      <PageIndicators
        totalPages={pagesData.length}
        currentPage={currentPage}
        goToPage={goToPage}
      />
    </section>
  );
};

export default ComparisonsSection;
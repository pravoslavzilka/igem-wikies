import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pagesData } from "./data/pagesData";
import ComparisonCard from "./components/ComparisonCard";
import TabNavigation from "./components/TabNavigation";
import PageIndicators from "./components/PageIndicators";

const ComparisonsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const tabNames = ["Transformation", "Promoters", "Cultivation", "Optimization"];

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
    <section className="flex flex-col items-center px-32 py-20 gap-12 w-full min-h-[642px] bg-white relative">
      {/* Header */}
      <div className="flex justify-between items-start gap-6 w-[1184px]">
        <h2 className="text-4xl font-semibold leading-[120%] text-center text-black w-[284px]">
          Before
        </h2>
        <h2 className="text-4xl font-semibold leading-[120%] text-center w-[484px]">
          Comparisons
        </h2>
        <h2 className="text-4xl font-semibold leading-[120%] text-center text-black w-[284px]">
          Now
        </h2>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevPage}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        disabled={currentPage === 0}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={nextPage}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        disabled={currentPage === pagesData.length - 1}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex justify-between items-center gap-4 w-[1184px] h-[280px]"
        >
          {/* Before Card */}
          <ComparisonCard
            type="before"
            time={pagesData[currentPage].beforeTime}
            description={pagesData[currentPage].beforeDescription}
            details={pagesData[currentPage].beforeDetails}
          />

          {/* Center Image/Visualization */}
          <div className="w-[484px] h-[280px] bg-gradient-to-r from-green-50 to-green-100 rounded-xl flex items-center justify-center">
            <div className="text-gray-500 text-lg">
              [{pagesData[currentPage].title} Visualization]
            </div>
          </div>

          {/* After Card */}
          <ComparisonCard
            type="after"
            time={pagesData[currentPage].afterTime}
            description={pagesData[currentPage].afterDescription}
            details={pagesData[currentPage].afterDetails}
            accentColor={pagesData[currentPage].accentColor}
          />
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
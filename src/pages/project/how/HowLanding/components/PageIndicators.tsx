import React from "react";

interface PageIndicatorsProps {
  totalPages: number;
  currentPage: number;
  goToPage: (index: number) => void;
}

const PageIndicators: React.FC<PageIndicatorsProps> = ({
  totalPages,
  currentPage,
  goToPage
}) => {
  return (
    <div className="flex gap-2 mt-4">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => goToPage(index)}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === currentPage ? 'bg-[#779E45]' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
};

export default PageIndicators;
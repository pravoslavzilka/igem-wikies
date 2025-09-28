import React from "react";

interface TabNavigationProps {
  tabNames: string[];
  currentPage: number;
  goToPage: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabNames,
  currentPage,
  goToPage
}) => {
  return (
    <div className="flex w-full max-w-[1184px] h-[50px] sm:h-[58px] overflow-x-auto">
      {tabNames.map((tabName, tabIndex) => (
        <button
          key={tabIndex}
          onClick={() => goToPage(tabIndex)}
          className={`flex justify-center items-center px-2 sm:px-3 py-4 sm:py-6 flex-1 h-full transition-colors min-w-0 ${
            tabIndex === currentPage 
              ? 'border-t-2 border-[#779E45]' 
              : 'border-t border-black/10 hover:bg-gray-50'
          }`}
        >
          <div className="text-sm sm:text-lg font-semibold leading-[120%] text-center text-black truncate">
            {tabName}
          </div>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
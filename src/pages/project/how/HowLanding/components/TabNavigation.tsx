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
    <div className="flex w-[1184px] h-[58px]">
      {tabNames.map((tabName, tabIndex) => (
        <button
          key={tabIndex}
          onClick={() => goToPage(tabIndex)}
          className={`flex justify-center items-center px-3 py-6 flex-1 h-full transition-colors ${
            tabIndex === currentPage 
              ? 'border-t-2 border-[#779E45]' 
              : 'border-t border-black/10 hover:bg-gray-50'
          }`}
        >
          <div className="text-lg font-semibold leading-[120%] text-center text-black">
            {tabName}
          </div>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
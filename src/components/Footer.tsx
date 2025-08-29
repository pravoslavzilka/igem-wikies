

const Footer = () => {
    return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and text */}
          <div className="flex items-center space-x-4">
            {/* Main logo placeholder */}
            <div className="flex items-center space-x-2">
              <img src="https://static.igem.wiki/teams/5642/icons/igem-brno-final-transparent.webp" alt="iGEM BRNO 2025 Logo" className=" h-20"/>
            </div>
            
            {/* Dividing line */}
            <div className="w-px h-12 bg-gray-300"></div>
            
            {/* Text content */}
            <div className="text-sm text-gray-700 leading-tight">
              <div className="font-semibold">Making plants</div>
              <div className="font-semibold">truly scalable</div>
            </div>
          </div>

          {/* Right side - Company logos */}
          <div className="flex items-center space-x-8">
            {/* Nietzsche logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500 rounded-full relative">
                  <div className="absolute inset-1 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800">Nietzsche</span>
            </div>

            {/* Luminous logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-teal-500 transform rotate-45 relative">
                  <div className="absolute inset-1 bg-teal-400"></div>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800">Luminous</span>
            </div>

            {/* FocalPoint logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded-full relative">
                  <div className="absolute inset-0 bg-purple-400 rounded-full"></div>
                  <div className="absolute inset-2 bg-purple-300 rounded-full"></div>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800">FocalPoint</span>
            </div>

            {/* Alt+Shift logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"></div>
                  <div className="absolute inset-1 bg-white opacity-30"></div>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800">Alt+Shift</span>
            </div>

            {/* GlobalBank logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-indigo-600 rounded-lg relative">
                  <div className="absolute inset-1 bg-indigo-400 rounded-sm"></div>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-800">GlobalBank</span>
            </div>

            {/* Partial logo on the right edge */}
            <div className="flex items-center space-x-2 opacity-50">
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
              </div>
              <span className="text-lg font-semibold text-gray-800">N...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Footer;



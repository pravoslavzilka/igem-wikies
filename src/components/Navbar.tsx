import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;
  const isActiveGroup = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  const menuItems = {
    project: [
      { label: 'What', path: '/project/what' },
      { label: 'Why', path: '/project/why' },
      { label: 'How', path: '/project/how' }
    ],
    toolbox: [
      { label: 'Tools', path: '/toolbox/tools' },
      { label: 'Resources', path: '/toolbox/resources' },
      { label: 'Downloads', path: '/toolbox/downloads' }
    ],
    engagement: [
      { label: 'Community', path: '/engagement/community' },
      { label: 'Events', path: '/engagement/events' },
      { label: 'Impact', path: '/engagement/impact' }
    ],
    'duckweed-mafia': [
      { label: 'Team', path: '/duckweed-mafia/team' },
      { label: 'Mission', path: '/duckweed-mafia/mission' },
      { label: 'Culture', path: '/duckweed-mafia/culture' }
    ]
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white relative z-50">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
          <Leaf className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-800">iGEM BRNO</span>
      </Link>
      
      <div className="flex items-center space-x-4">
        {/* Project Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setHoveredMenu('project')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer ${
            isActiveGroup(['/project']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'
          }`}>
            <span>Project</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          {hoveredMenu === 'project' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              {menuItems.project.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Toolbox Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setHoveredMenu('toolbox')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer ${
            isActiveGroup(['/toolbox']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'
          }`}>
            <span>Toolbox</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          {hoveredMenu === 'toolbox' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              {menuItems.toolbox.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Engagement Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setHoveredMenu('engagement')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer ${
            isActiveGroup(['/engagement']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'
          }`}>
            <span>Engagement</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          {hoveredMenu === 'engagement' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              {menuItems.engagement.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Duckweed Mafia Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setHoveredMenu('duckweed-mafia')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer ${
            isActiveGroup(['/duckweed-mafia']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'
          }`}>
            <span>Duckweed mafia</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          {hoveredMenu === 'duckweed-mafia' && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
              {menuItems['duckweed-mafia'].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Link 
        to="/handbook" 
        className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full transition-colors"
      >
        Handbook
      </Link>
    </nav>
  );
};

export default Navbar;
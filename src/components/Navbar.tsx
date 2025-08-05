import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => location.pathname === path;
  const isActiveGroup = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  const menuItems = {
    project: [
      { label: 'What', path: '/project/what' },
      { label: 'How', path: '/project/how' },
      { label: 'Why', path: '/project/why' }
      
    ],
    toolbox: [
      { label: 'Why plants suck ', path: '/toolbox/why-plants-suck' },
      { label: 'Deep dive on duckweed', path: '/toolbox/deep-dive-on-duckweed' },
      { label: 'Programmable duckweed', path: '/toolbox/programmable-duckweed' }
    ],
    engagement: [
      { label: 'Human practices', path: '/engagement/human-practices' },
      { label: 'Entrepreneurship', path: '/engagement/entrepreneurship' },
      { label: 'Outreach', path: '/engagement/Outreach' }
    ],
    'duckweed-mafia': [
      { label: 'Team', path: '/duckweed-mafia/team' },
      { label: 'Sponsors and partners', path: '/duckweed-mafia/sponsors-and-partners' },
      { label: 'Cool statistics', path: '/duckweed-mafia/cool-statistics' },
      { label: 'Attributions', path: '/duckweed-mafia/cool-statistics' }
    ]
  };

  // Handles mouse enter: show dropdown immediately
  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(menu);
    setDropdownVisible(menu);
  };

  // Handles mouse leave: delay hiding dropdown for 500ms
  const handleMouseLeave = () => {
    setHoveredMenu(null);
    timeoutRef.current = setTimeout(() => {
      setDropdownVisible(null);
    }, 200);
  };

  // Toggle dropdown on click (mobile only)
  const handleDropdownClick = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white relative z-50">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
          <Leaf className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-800">iGEM BRNO</span>
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center px-2 py-2 rounded-full bg-green-100 text-green-800"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <ChevronDown className={`w-6 h-6 transform transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Project Main Link */}
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter('project')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer
              ${isActiveGroup(['/project']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <span>Project</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {dropdownVisible === 'project' && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2
                transition-all duration-300 ease-in-out overflow-hidden origin-top"
              style={{ transformOrigin: 'top' }}
            >
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

        {/* Toolbox Main Link */}
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter('toolbox')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer
              ${isActiveGroup(['/toolbox']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <span>Toolbox</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {dropdownVisible === 'toolbox' && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2
                transition-all duration-300 ease-in-out overflow-hidden origin-top"
              style={{ transformOrigin: 'top' }}
            >
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

        {/* Engagement Main Link */}
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter('engagement')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer
              ${isActiveGroup(['/engagement']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <span>Engagement</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {dropdownVisible === 'engagement' && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2
                transition-all duration-300 ease-in-out overflow-hidden origin-top"
              style={{ transformOrigin: 'top' }}
            >
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

        {/* Duckweed Mafia Main Link */}
        <div 
          className="relative"
          onMouseEnter={() => handleMouseEnter('duckweed-mafia')}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer
              ${isActiveGroup(['/duckweed-mafia']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'}`}
          >
            <span>Duckweed mafia</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {dropdownVisible === 'duckweed-mafia' && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2
                transition-all duration-300 ease-in-out overflow-hidden origin-top"
              style={{ transformOrigin: 'top' }}
            >
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
      
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden animate-slide-down z-40">
          <div className="flex flex-col py-2">
            {/* Only main links visible */}
            <button
              className="block px-4 py-2 font-semibold text-green-700 text-left"
              onClick={() => setOpenDropdown(openDropdown === 'project' ? null : 'project')}
            >
              Project <ChevronDown className="inline w-4 h-4" />
            </button>
            {openDropdown === 'project' && (
              <div>
                {menuItems.project.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                    onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <button
              className="block px-4 py-2 font-semibold text-green-700 text-left"
              onClick={() => setOpenDropdown(openDropdown === 'toolbox' ? null : 'toolbox')}
            >
              Toolbox <ChevronDown className="inline w-4 h-4" />
            </button>
            {openDropdown === 'toolbox' && (
              <div>
                {menuItems.toolbox.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                    onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <button
              className="block px-4 py-2 font-semibold text-green-700 text-left"
              onClick={() => setOpenDropdown(openDropdown === 'engagement' ? null : 'engagement')}
            >
              Engagement <ChevronDown className="inline w-4 h-4" />
            </button>
            {openDropdown === 'engagement' && (
              <div>
                {menuItems.engagement.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                    onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <button
              className="block px-4 py-2 font-semibold text-green-700 text-left"
              onClick={() => setOpenDropdown(openDropdown === 'duckweed-mafia' ? null : 'duckweed-mafia')}
            >
              Duckweed mafia <ChevronDown className="inline w-4 h-4" />
            </button>
            {openDropdown === 'duckweed-mafia' && (
              <div>
                {menuItems['duckweed-mafia'].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                    onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            {/* Handbook */}
            <Link 
              to="/handbook" 
              className="block px-4 py-2 mt-2 bg-green-700 hover:bg-green-800 text-white rounded-full transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              Handbook
            </Link>
          </div>
        </div>
      )}

      {/* Handbook desktop */}
      <Link 
        to="/handbook" 
        className="hidden md:block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full transition-colors"
      >
        Handbook
      </Link>
    </nav>
  );
};

export default Navbar;
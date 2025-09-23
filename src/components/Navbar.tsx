import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, ChevronDown } from 'lucide-react';
import "@fontsource/urbanist";
import "@fontsource/urbanist/600.css";
import "@fontsource/space-grotesk";
import { label } from 'framer-motion/client';
import path from 'path';

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
      { label: 'Why', path: '/project/why' },
      
    ],
    toolbox: [
      { label: 'Why plants suck ', path: '/toolbox/why-plants-suck/' },
      { label: 'Deep dive on duckweed', path: '/toolbox/deep-dive-on-duckweed' },
      { label: 'Programmable duckweed', path: '/toolbox/programmable-duckweed' },
    ],
    engagement: [
      { label: 'Human practices', path: '/engagement/human-practices' },
      { label: 'Entrepreneurship', path: '/engagement/entrepreneurship' },
      { label: 'Outreach', path: '/engagement/Outreach' },
      { label: 'Sustainability', path: '/engagement/sustainability' }
    ],
    'duckweed-mafia': [
      { label: 'Team', path: '/duckweed-mafia/team' },
      { label: 'Sponsors and partners', path: '/duckweed-mafia/partners' },
      { label: 'Cool statistics', path: '/duckweed-mafia/cool-statistics' },
      { label: 'Safety', path: '/duckweed-mafia/safety' },
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
        <img style={{  height: '60px', marginLeft: '12px' }} src="https://static.igem.wiki/teams/5642/icons/igem-brno-final-transparent.webp" />
      </Link>

      {/* Desktop menu centered */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center space-x-4 mr-2">
          {/* Project Main Link */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('project')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`flex items-center space-x-1 border text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer
                ${isActiveGroup(['/project']) ? 'bg-green-100 text-green-800' : 'bg-gray-50 hover:bg-gray-100'}`}
                style={{ borderColor: '#779E45', fontFamily: 'Urbanist, sans-serif', borderWidth: '2px', color: '#1B1B1B', lineHeight: '140%', fontSize: '16px', fontWeight: '600' }}
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
                style={{ borderColor: '#779E45', fontFamily: 'Urbanist, sans-serif', borderWidth: '2px', color: '#1B1B1B', lineHeight: '140%', fontSize: '16px', fontWeight: '600' }}
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
                style={{ borderColor: '#779E45', fontFamily: 'Urbanist, sans-serif', borderWidth: '2px', color: '#1B1B1B', lineHeight: '140%', fontSize: '16px', fontWeight: '600' }}
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
                style={{ borderColor: '#779E45', fontFamily: 'Urbanist, sans-serif', borderWidth: '2px', color: '#1B1B1B', lineHeight: '140%', fontSize: '16px', fontWeight: '600' }}
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
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center px-2 py-2 rounded-full bg-white-100 text-green-800"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Toggle menu"
        style={{ borderColor: '#779E45', fontFamily: 'Urbanist, sans-serif', borderWidth: '2px', color: '#1B1B1B', lineHeight: '140%', fontSize: '16px', fontWeight: '600' }}
      >
        <ChevronDown className={`w-6 h-6 transform transition-transform ${mobileOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden animate-slide-down z-40"
        style={{ fontFamily: 'Urbanist, sans-serif', color: '#1B1B1B', lineHeight: '140%', fontSize: '16px', fontWeight: '600' }}
        >
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
            
          </div>
        </div>
      )}

      
    </nav>
  );
};

export default Navbar;
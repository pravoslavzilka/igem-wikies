import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const menuItems = {
    project: {
      title: 'Project',
      items: [
        { label: 'Why', sublabel: 'Description', path: '/project/description' },
        { label: 'What', sublabel: 'Contribution', path: '/contribution' },
        { label: 'How', sublabel: 'Engineering', path: '/engineering' }
      ]
    },
    toolbox: {
      title: 'Duckweed Toolbox',
      items: [
        
        { label: 'Plant SynBio', path: '/plant' },
        { 
          label: 'Programmable Duckweed', 
          path: '/plant#programmable',
          subItems: [
            { label: 'Part Collection', path: '/toolbox/programmable-duckweed/part-collection' },
            { label: 'Measurement', path: '/measurement' }
          ]
        },
        { 
          label: 'Predictable Duckweed', 
          path: '/plant#predictable',
          subItems: [
            { label: 'Hardware', path: '/hardware' },
            { label: 'Model', path: '/model' }
          ]
        }
      ]
    },
    engagement: {
      title: 'Engagement',
      items: [
        { label: 'Human Practices', path: '/human-practices' },
        { label: 'Entrepreneurship', path: '/entrepreneurship' },
        { label: 'Outreach', path: '/engagement/outreach' },
        { label: 'Sustainability', path: '/sustainability' }
      ]
    },
    'duckweed-mafia': {
      title: 'Duckweed Mafia',
      items: [
        { label: 'Team', path: '/duckweed-mafia/team' },
        { label: 'Partners', path: '/duckweed-mafia/partners' },
        { label: 'Attributions', path: '/attributions' },
        { label: 'Safety', path: '/safety-and-security' }
      ]
    }
  };

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(menu);
    setDropdownVisible(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
    timeoutRef.current = setTimeout(() => {
      setDropdownVisible(null);
    }, 200);
  };

  const handleDropdownClick = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white relative z-50">
      <Link to="/" className="flex items-center space-x-2">
        <img 
          style={{ height: '60px', marginLeft: '12px' }} 
          src="https://static.igem.wiki/teams/5642/icons/igem-brno-final-transparent.webp"
          alt="Logo"
        />
      </Link>

      {/* Desktop menu centered */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center space-x-4 mr-2">
          {Object.entries(menuItems).map(([key, menu]) => (
            <div 
              key={key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center space-x-1 border text-gray-600 hover:text-gray-800 transition-colors px-4 py-2 rounded-full cursor-pointer bg-gray-50 hover:bg-gray-100"
                style={{ 
                  borderColor: '#779E45', 
                  fontFamily: 'Urbanist, sans-serif', 
                  borderWidth: '2px', 
                  color: '#1B1B1B', 
                  lineHeight: '140%', 
                  fontSize: '16px', 
                  fontWeight: '600' 
                }}
              >
                <span>{menu.title}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {dropdownVisible === key && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-3 min-w-[240px] transition-all duration-300 ease-in-out overflow-hidden origin-top"
                  style={{ transformOrigin: 'top' }}
                >
                  {menu.items.map((item, index) => (
                    <div key={index}>
                      <a
                        href={item.path}
                        className="block px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors" 
                             style={{ fontSize: '15px', fontFamily: 'Urbanist, sans-serif' }}>
                          {item.label}
                        </div>
                        {item.sublabel && (
                          <div className="text-gray-500 text-sm mt-0.5" 
                               style={{ fontFamily: 'Urbanist, sans-serif' }}>
                            {item.sublabel}
                          </div>
                        )}
                      </a>
                      {item.subItems && (
                        <div className="ml-4 mt-1 mb-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-1.5 text-md text-gray-600 hover:text-green-600 hover:bg-gray-50 transition-colors"
                              style={{ fontFamily: 'Urbanist, sans-serif' }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center px-2 py-2 rounded-full bg-white-100 text-green-800"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Toggle menu"
        style={{ 
          borderColor: '#779E45', 
          fontFamily: 'Urbanist, sans-serif', 
          borderWidth: '2px', 
          color: '#1B1B1B', 
          lineHeight: '140%', 
          fontSize: '16px', 
          fontWeight: '600' 
        }}
      >
        <ChevronDown className={`w-6 h-6 transform transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div 
          className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden z-40"
          style={{ 
            fontFamily: 'Urbanist, sans-serif', 
            color: '#1B1B1B', 
            lineHeight: '140%', 
            fontSize: '16px', 
            fontWeight: '600' 
          }}
        >
          <div className="flex flex-col py-2">
            {Object.entries(menuItems).map(([key, menu]) => (
              <div key={key}>
                <button
                  className="block w-full px-4 py-2 font-semibold text-green-700 text-left"
                  onClick={() => handleDropdownClick(key)}
                >
                  {menu.title} <ChevronDown className="inline w-4 h-4" />
                </button>
                {openDropdown === key && (
                  <div>
                    {menu.items.map((item, index) => (
                      <div key={index}>
                        <Link
                          to={item.path}
                          className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors"
                          onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                        >
                          <div className="font-semibold">{item.label}</div>
                          {item.sublabel && (
                            <div className="text-sm text-gray-500">{item.sublabel}</div>
                          )}
                        </Link>
                        {item.subItems && (
                          <div className="ml-4">
                            {item.subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                className="block px-6 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors"
                                onClick={() => { setMobileOpen(false); setOpenDropdown(null); }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
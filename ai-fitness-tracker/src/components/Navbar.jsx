import React, { useState } from 'react';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define your menu items here
  const navItems = [
    { name: 'Home', icon: '🏠', path: '/' },
    { name: 'Upload', icon: '📤', path: '/upload' },
    { name: 'Analytics', icon: '📊', path: '/analytics' },
    { name: 'Contact', icon: '📞', path: '/contact' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  return (
    <div 
      className={`fixed top-0 left-0 h-screen bg-slate-900 text-white transition-all duration-300 ease-in-out z-50 flex flex-col shadow-2xl
        ${isExpanded ? 'w-64' : 'w-20'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20 border-b border-slate-800 overflow-hidden">
        <span className="text-2xl font-bold text-blue-400">
          {isExpanded ? 'AI.FITNESS' : 'AF'}
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-6 space-y-2 px-3">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="flex items-center h-12 px-4 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 transition-colors group"
          >
            <span className="text-xl min-w-[40px] flex justify-center">
              {item.icon}
            </span>
            <span 
              className={`ml-4 font-medium transition-opacity duration-300 whitespace-nowrap
                ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {item.name}
            </span>
          </a>
        ))}
      </nav>

      {/* User / Profile Section at Bottom */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center px-2">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            U
          </div>
          <div className={`ml-4 transition-opacity duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-sm font-semibold">User Name</p>
            <p className="text-xs text-slate-400">Pro Member</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
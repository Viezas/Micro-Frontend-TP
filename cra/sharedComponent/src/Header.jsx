import React from 'react';
import '../public/tailwind.css';

const Header = ({ children, defaultContent }) => {
  return (
    <header class="flex items-center justify-between bg-emerald-500 px-2 py-4 text-white">
      <h1>Micro frontend - TD</h1>
      {children ? children : defaultContent}
    </header>
  );
};
Header.defaultProps = {
  defaultContent: '',
};
export default Header;

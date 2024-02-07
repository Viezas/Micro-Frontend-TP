import React from 'react';
import '../public/tailwind.css';
const Footer = ({children, defaultContent }) => {
  return(
      <footer className="flex items-center justify-between bg-emerald-500 text-center px-2 py-4 text-white">
          <span>Tous droits réservés à l'équipe Victor, Persi et Mathis ©️</span>
          <div>{children ? children : defaultContent}</div>
      </footer>
  );
};
Footer.defaultProps = {
    defaultContent: '',
};
export default Footer;
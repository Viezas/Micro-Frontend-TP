import React from 'react';
import '../../public/tailwind.css';
const Banner = ({ children, defaultContent, title }) => {
  return(
      <div className="flex items-center justify-between bg-emerald-500 text-center px-2 py-4 text-white">
            <div>
                <h1 className="text-xl">Banner title : {title}</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             <img width="150" height="150" src="https://img.freepik.com/vecteurs-libre/gens-assemblent-pieces-puzzle_52683-28610.jpg"/>
            </div>
          <div>{children ? children : defaultContent}</div>
      </div>
  );
};
Banner.defaultProps = {
    defaultContent: '',
};
export default Banner;
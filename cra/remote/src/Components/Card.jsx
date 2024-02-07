import React from 'react';
import '../../public/tailwind.css';
import '../../public/app.css';

const Card = ({ children, defaultContent }) => {
  return (
    <div class="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="mx-auto max-w-md">
        <div class="divide-y divide-gray-300/50">
          <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
            {children ? children : defaultContent}
          </div>
        </div>
      </div>
    </div>
  );
};
Card.defaultProps = {
  defaultContent: '',
};
export default Card;

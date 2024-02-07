import React from 'react';
import '../../public/tailwind.css';
import Header from '../Header';
import Footer from '../Footer';

const BaseLayout = ({ children, defaultContent, client }) => {
  return (
    <div>
      <Header>
        <div className="flex items-center justify-between gap-2">
          <button className="rounded border px-4 py-1 hover:bg-sky-500">Sign in</button>
          <span>/</span>
          <button className="rounded border px-4 py-1 hover:bg-sky-500">Sign up</button>
        </div>
      </Header>
      <h1>Basic Host-Remote</h1>
      <h2>{client}</h2>
      <main className="px-4 py-2">{children ? children : defaultContent}</main>
      <Footer />
    </div>
  );
};

BaseLayout.defaultProps = {
  defaultContent:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusantium iure ut consectetur. Non ex illum magnam quia? Quam dignissimos dolor nemo velit perspiciatis odit tempora eius atque totam soluta!',
};

export default BaseLayout;

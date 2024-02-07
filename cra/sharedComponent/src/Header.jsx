import React from 'react';
import '../public/tailwind.css';

const Header = () => {
  return (
    <header class="flex items-center justify-between bg-emerald-500 px-2 py-4 text-white">
      <h1>Micro frontend - TD</h1>
      <div class="flex items-center justify-between gap-2">
        <button class="rounded border px-4 py-1 hover:bg-sky-500">Sign in</button>
        <span>/</span>
        <button class="rounded border px-4 py-1 hover:bg-sky-500">Sign up</button>
      </div>
    </header>
  );
};

export default Header;

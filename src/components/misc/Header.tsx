import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-transparent px-4 lg:px-6 p-20">
        <div className="flex flex-wrap text-center mx-auto max-w-screen-xl">
          <p className="leading-15 cursor-default text-4xl md:text-6xl uppercase pt-4 w-full">
            Declan Murphy
          </p>
          <p className="leading-9 cursor-default text-2xl md:text-4xl uppercase pt-4 w-full">
            Full-Stack Developer
          </p>
        </div>
      </nav>
    </header>
  );
};

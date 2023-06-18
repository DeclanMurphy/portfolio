import Image from 'next/image';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-transparent px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex mb-3 select-none">
            <div className="flex items-center">
              {/* <a href="/">
                <Image
                  className="-mb-5 -mr-1 -ml-4 mt-3 object-contain h-10 w-15"
                  src="/logo.png"
                  width={90}
                  height={10}
                  alt="Logo"
                />
              </a> */}
              <h1 className="hidden lg:block leading-9 cursor-default">
                Declan Murphy <span> | Full-Stack Developer</span>
              </h1>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

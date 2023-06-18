import classNames from 'classnames';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
  children?: React.ReactNode;
  className?: any;
  image: StaticImageData;
  alt: string;
};

const ImageColumnPanel: React.FC<Props> = ({ children, className, image, alt, ...rest }) => {
  const finalClassNames = classNames(
    'bg-zinc-950 shadow-xl ring-1 ring-zinc-800 hover:ring-zinc-700 sm:rounded-lg relative overflow-hidden bg-no-repeat bg-cover bg-center',
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      <Image src={image} alt={alt} />
      <div className="sm:px-6 px-4 pb-6">{children}</div>
    </div>
  );
};

export default ImageColumnPanel;

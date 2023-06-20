import classNames from 'classnames';
import React from 'react';
import Image from 'next/image';
import { BsFillImageFill } from 'react-icons/bs';

type Props = {
  children?: React.ReactNode;
  className?: any;
  image: string;
  alt: string;
};

const ImageColumnPanel: React.FC<Props> = ({ children, className, image, alt, ...rest }) => {
  const finalClassNames = classNames(
    'bg-zinc-950 shadow-xl ring-1 ring-zinc-800 hover:ring-zinc-700 sm:rounded-lg relative overflow-hidden bg-no-repeat bg-cover bg-center',
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      <Image
        className="w-full h-auto"
        sizes="100vw"
        src={image}
        alt={alt}
        width={0}
        height={0}
        priority={true}
      />
      <div className="sm:px-6 px-4 pb-6">{children}</div>
    </div>
  );
};

export default ImageColumnPanel;

interface ICPSkeletonProps {
  times: number;
}

export const ICPSkeleton: React.FC<ICPSkeletonProps> = ({ times }) => {
  const Boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          key={i}
          className={
            'bg-zinc-950 shadow-xl ring-1 ring-zinc-800 hover:ring-zinc-700 sm:rounded-lg relative overflow-hidden bg-no-repeat bg-cover bg-center animate-pulse'
          }
        >
          <div className="space-y-3 m-3">
            <div className="flex items-center justify-center h-48 lg:h-96 mb-4 bg-zinc-700 rounded">
              <BsFillImageFill className="w-12 h-12 text-zinc-600" />
            </div>
            <div className="h-3 w-6/12 rounded-lg bg-zinc-700" />
            <div className="h-3 w-4/12 rounded-lg bg-zinc-700" />
          </div>
        </div>
      );
    });
  return <>{Boxes}</>;
};

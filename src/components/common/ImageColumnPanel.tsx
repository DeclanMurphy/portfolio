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

const outerClass =
  'bg-zinc-950 shadow-xl ring-1 ring-zinc-700 sm:rounded-lg relative overflow-hidden bg-no-repeat bg-cover bg-center flex flex-col';

const ImageColumnPanel: React.FC<Props> = ({ children, className, image, alt, ...rest }) => {
  return (
    <div {...rest} className={classNames(outerClass, className)}>
      <div className="w-full aspect-video bg-zinc-800 rounded">
        <Image
          className="w-full select-none"
          sizes="100vw"
          src={image}
          alt={alt}
          width={0}
          height={0}
          priority={true}
        />
      </div>
      <div className="sm:px-6 px-4 h-24">{children}</div>
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
        <div key={i} className={classNames(outerClass, 'animate-pulse')}>
          <div className="flex items-center justify-center w-full aspect-video bg-zinc-800 rounded">
            <BsFillImageFill className="w-12 h-12 text-zinc-600" />
          </div>
          <div className="px-4 pt-3 h-24">
            <div className="h-6 a w-9/12 md:w-6/12 m-2 rounded-lg bg-zinc-800" />
            <div className="h-5 a w-6/12 md:w-3/12 m-2 rounded-lg bg-zinc-800" />
          </div>
        </div>
      );
    });
  return <>{Boxes}</>;
};

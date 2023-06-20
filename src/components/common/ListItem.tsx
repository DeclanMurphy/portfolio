import React from 'react';
import { IconType } from 'react-icons';
import { BiBitcoin, BiCodeAlt, BiMoviePlay, BiMusic } from 'react-icons/bi';
import { SiBlender, SiLinux } from 'react-icons/si';

type Props = {
  children?: React.ReactNode;
  icon: IconKey;
};

const iconList: Record<IconKey, IconType> = {
  BiMusic,
  BiMoviePlay,
  BiBitcoin,
  BiCodeAlt,
  SiBlender,
  SiLinux
};

export type IconKey =
  | 'BiMusic'
  | 'BiMoviePlay'
  | 'BiBitcoin'
  | 'BiCodeAlt'
  | 'SiBlender'
  | 'SiLinux';

const ListItem: React.FC<Props> = ({ children, icon }) => {
  const Icon = iconList[icon];
  return (
    <li className="flex items-center">
      {Icon && <Icon className="h-6 w-6 flex-none fill-zinc-300 stroke-zinc-500" />}
      <p className="ml-4">{children}</p>
    </li>
  );
};

export default ListItem;

const ListItemSkeleton: React.FC = () => {
  return (
    <div className="flex space-x-4 animate-pulse">
      <div className="rounded-md bg-zinc-700 h-5 w-5 mt-12"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-5 bg-zinc-700 rounded"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-5 bg-zinc-700 rounded col-span-2"></div>
          <div className="h-5 bg-zinc-700 rounded col-span-1"></div>
        </div>
        <div className="h-5 bg-zinc-700 rounded"></div>
      </div>
    </div>
  );
};

export { ListItemSkeleton };

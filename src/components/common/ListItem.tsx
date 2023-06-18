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

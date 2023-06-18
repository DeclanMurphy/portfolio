import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const HighlightText: React.FC<Props> = ({ children }) => {
  return <span className="text-zinc-300 font-semibold">{children}</span>;
};

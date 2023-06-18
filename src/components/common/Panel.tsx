import classNames from 'classnames';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: any;
  padding?: boolean;
};

const Panel: React.FC<Props> = ({ children, className, padding, ...rest }) => {
  const finalClassNames = classNames(
    'bg-zinc-950 shadow-xl ring-1 ring-zinc-800 sm:rounded-lg',
    padding ? 'sm:px-10 px-6 pb-6 pt-10' : '',
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;

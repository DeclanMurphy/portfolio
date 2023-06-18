import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const List: React.FC<Props> = ({ children }) => {
  return <ul className="space-y-4">{children}</ul>;
};

export default List;

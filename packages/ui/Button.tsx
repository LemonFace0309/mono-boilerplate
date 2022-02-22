import { FC } from 'react';

export const Button: FC = ({ children }) => {
  return (
    <button type="button" className="bg-blue-500">
      {children}
    </button>
  );
};

import type { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <main className="main-content">{children}</main>;
}

export type { MainProps };
export default Main;

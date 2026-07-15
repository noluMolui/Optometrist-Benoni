import type { ReactNode } from 'react';
import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export type { LayoutProps };
export default Layout;

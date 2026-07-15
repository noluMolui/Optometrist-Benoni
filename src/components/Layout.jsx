import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;

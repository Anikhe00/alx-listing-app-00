import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen" role="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

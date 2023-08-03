import Footer from '../shahred/Footer';
import Navbar from '../shahred/Navbar';

const RootLayout = ({ children }) => {
  return (
    <div className="min-w-full mx-auto  bg-white">
      <Navbar />
      <main className="mt-3 mb-2">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;

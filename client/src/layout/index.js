import { Toaster } from 'react-hot-toast';
import ReactTooltip from 'react-tooltip';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <main className="dark:bg-gray-800 bg-white relative h-screen">
      <Navbar />
      {children}
      <Footer />
      <Toaster
        toastOptions={{
          position: 'top-center',
          duration: 2000,
        }}
      />
      <ReactTooltip />
    </main>
  );
}
export default Layout;

import { Toaster } from 'react-hot-toast';
import ReactTooltip from 'react-tooltip';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <main className="dark:bg-gray-800 bg-white relative h-screen">
      <Navbar />
      <BrowserRouter>{children}</BrowserRouter>
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

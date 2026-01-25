import { Outlet } from 'react-router-dom';
// import { Footer } from './Footer.tsx';
import Navbar from "./Navbar.tsx";

export const Layout = () => {
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />   {/* 👈 REQUIRED */}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

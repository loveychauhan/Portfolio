import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <aside className="bg-[#3A3A3A] sm:py-8 px-2 py-2 sm:flex-col items-center">
        <nav className=" h-full w-full flex sm:flex-col gap-4 items-center ">
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/work">
            My Work
          </NavLink>
        </nav>
      </aside>
      <main className="w-full max-w-[640px] p-4  sm:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

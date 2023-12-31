import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../customhooks/useAuth";
import Swal from "sweetalert2";
import useAdmin from "../../customhooks/useAdmin";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();
  const { isAdmin } = useAdmin();
  const signOut = () => {
    logOut().then(() => {
      Swal.fire({
        title: "LOGOUT SUCCESSFUL",

        icon: "success",
      });
    });
  };

  const links = user ? (
    <>
      <Link
        to="/rooms"
        className="mr-8 hover:text-gray-300 hover:font-agbalumo"
      >
        Rooms
      </Link>
      <button
        className="mr-8 hover:text-gray-300 hover:font-agbalumo"
        onClick={signOut}
      >
        Logout
      </button>

      <div className="ml-[9rem] mt-3 md:mt-0 md:ml-0 md:mr-0 cursor-pointer">
        <Link to={isAdmin === "admin" ? "dashboard/admin" : "dashboard/user"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
    </>
  ) : (
    <>
      <Link
        to="/rooms"
        className="mr-8 hover:text-gray-300 hover:font-agbalumo"
      >
        Rooms
      </Link>
      <Link
        to="/login"
        className="mr-8 hover:text-gray-300 hover:font-agbalumo"
      >
        Login
      </Link>
    </>
  );
  return (
    <header className="w-full bg-black text-gray-100 body-font mb-4 shadow-sm">
      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-7 px-5">
        {/* Site logo and Name */}
        <Link
          to="/"
          className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <span className="ml-3 text-2xl text-gray-100 font-semibold antialiased font-agbalumo">
            LuxeSeven
          </span>
        </Link>
        {/* Navbar */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
          {links}
        </nav>

        {/* Burger icon standard */}
        <button
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* :MOBILE MENU */}
      {isOpen && (
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-900 text-base uppercase text-center font-semibold">
          {links}
        </div>
      )}
    </header>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-4 pl-3 pr-4 sm:pl-5 sm:pr-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-2 w-40 p-4 shadow space-y-1.5"
          >
            <li>
              <a className="h-8 font-medium rounded-md text-base px-3">Home</a>
            </li>
            <li>
              <a className="h-8 font-medium rounded-md text-base px-3">
                Auctions
              </a>
            </li>
            <li>
              <a className="h-8 font-medium rounded-md text-base px-3">
                Categories
              </a>
            </li>
            <li>
              <a className="h-8 font-medium rounded-md text-base px-3">
                How To Work
              </a>
            </li>
          </ul>
        </div>
        <div
          onClick={() => (window.location.href = "./index.html")}
          className="hover:cursor-pointer text-2xl ml-1.5 lg:ml-0 px-0 font-poppins gap-0 rounded-md"
        >
          <span className="text-blue font-normal">Auction</span>
          <span className="text-gold font-bold">Gallery</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-3 font-poppins">
          <li className="btn btn-sm btn-ghost px-4 h-9 font-medium rounded-md text-sm">
            Home
          </li>
          <li className="btn btn-sm btn-ghost px-4 h-9 font-medium rounded-md text-sm">
            Auctions
          </li>
          <li className="btn btn-sm btn-ghost px-4 h-9 font-medium rounded-md text-sm">
            Categories
          </li>
          <li className="btn btn-sm btn-ghost px-4 h-9 font-medium rounded-md text-sm">
            How To Work
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-sm px-1.5 rounded-full badge-primary indicator-item">
              9
            </span>
          </div>
        </button>
        <div className="ml-3">
          <div
            tabIndex={0}
            role="button"
            className="avatar hover:cursor-pointer hover:opacity-80 "
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

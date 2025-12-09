import React, { useEffect, useState } from "react";

function Appbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav = (
    <>
      {" "}
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/Cource">cource</a>
      </li>
      <li>
        <a href="/Contact">Contact</a>
      </li>
      <li>
        <a href="/Abouts">About</a>
      </li>{" "}
    </>
  );

  return (
    <div
      className={` w-full md:pl-10 md:pr-6 m-0  fixed top-0 right-0 left-0 bg-base-100 shadow-sm z-10 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar  ">
        {/* shadow-sm for shado in navbar*/}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-7 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>

          <a href="/" className=" text-2xl font-bold cursor-pointer">
            BookStore
          </a>
        </div>
        <div className="navbar-end space-x-4">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{nav}</ul>
          </div>

          <div className="hidden md:block">
            {" "}
            <label className="input rounded-md">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>

          <div>
            <a>
              <button className="btn btn-neutral">Login</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;

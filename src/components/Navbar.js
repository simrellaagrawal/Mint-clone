import React from "react";

export default function Navbar() {
  

  return (
    <div className=" ">
      <nav className=" relative w-full flex flex-row items-center justify-between py-4 bg-[#8d99ae] text-black shadow-lg navbar navbar-expand-lg navbar-light px-6 overflow-x-auto overflow-y-hidden">
            <ul className="navbar-nav flex flex-row  list-style-none mx-auto  ">
              <li className="nav-item px-4">
                <a className="nav-link font-serif  text-black  hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"  aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Latest
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Market
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Premium
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Money
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Mutual Fund
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Industry
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Companies
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Technology
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Opinion
                </a>
              </li>
              <li className="nav-item px-4">
                <a
                  className="nav-link font-serif text-black hover:text-gray-500 focus:text-red-700 p-0 focus:font-semibold"
                  href="#"
                >
                  Web Stories
                </a>
              </li>
            </ul>
      </nav>
    </div>
  );
}

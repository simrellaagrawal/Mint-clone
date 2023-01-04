import React from "react";
import Sidebar from "./Sidebar";

export default function Topbar() {
  return (
    <div className="w-full h-20 flex justify-center items-center border-2 bg-white ">
      <div className="grid basis-3/12 justify-items-start pl-4 ">
        <div className="flex space-x-2">
          <div>
            <button
              className="inline-block px-6 py-2.5 font-serif  font-semibold text-base leading-tight rounded   hover:shadow-lg  focus:shadow-lg  focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Explore
            </button>

            <div
              className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-60"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
                <div>
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid basis-6/12 justify-items-center">
        <p className="text-[#ef233c] text-3xl font-semibold font-serif tracking-wide ">
          The Lotus Group
        </p>
        <p className="text-[10px] mt-2 pb-0 text-gray-500">
          {" "}
          25 December 2022, Tuesday
        </p>
      </div>
      <div className="grid justify-items-end basis-3/12 pr-10 ">
        <div className="flex justify-center items-center">
          <button>
            <i class="fas fa-search"></i>
          </button>
          <button className="text-sm text-gray-500 px-4 cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

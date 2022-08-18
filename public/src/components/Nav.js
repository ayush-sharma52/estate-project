import React, { useState } from "react";
import { Transition } from "@headlessui/react";
let image = require("../../src/icons/estate-icon-25.jpg");

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-slate-50 shadow-slate-200 shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8 fill-blue-600 " src={image} alt="Workflow" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                 <button 
                  className=" bg-blue-200  text-blue-600   px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Rent
                  </button>

                  <button disabled
                    className="text-gray-500 hover:bg-blue-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Buy
                  </button>

                  <button disabled
                    className="text-gray-500 hover:bg-blue-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sell
                  </button>

                  <button disabled
                    className="text-gray-500 hover:bg-blue-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Mange Property
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-blue-600 hover:bg-blue-300 focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button 
                  className=" bg-blue-200  text-blue-600   px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Rent
                  </button>

                  <button disabled
                    className="text-gray-500 hover:bg-blue-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Buy
                  </button>

                  <button disabled
                    className="text-gray-500 hover:bg-blue-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sell
                  </button>

                  <button disabled
                    className="text-gray-500 hover:bg-blue-200 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Mange Property
                  </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;

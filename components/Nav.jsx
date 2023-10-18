"use client";

import React, { useState } from "react";

import usePlanets from "@/store/usePlanets";

import data from "../app/data";

//--------------------
const Nav = () => {
  // Zustand global state
  const { planet, choose } = usePlanets();

  const [showMenu, setShowMenu] = useState(false);

  /**
   * @param {number} index
   */
  function setPlanet(index) {
    choose(index);
    setShowMenu(false);
  }

  return (
    <header className="flex flex-col h-fit w-full my-3 relative">
      <nav className="flex w-full flex-col px-10">
        <div className="flex flex-row md:flex-col lg:flex-row w-full justify-between items-center md:items-start">
          <h2 className="text-white md:mb-5 lg:mb-0 md:text-3xl lg:text-4xl tracking-tighter md:self-center lg:self-stretch w-fit">
            THE PLANETS
          </h2>
          {/* Burger menu */}
          <div className="md:hidden">
            <div onClick={() => setShowMenu((prev) => !prev)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                </g>
              </svg>
            </div>
            {showMenu && (
              <div className="absolute bg-p_dark inset-0 z-20 w-screen h-screen">
                <div className="flex flex-col justify-start items-start">
                  {data.map((a_planet, index) => (
                    <div
                      className="flex w-full justify-between items-center hover:cursor-pointer"
                      key={index}
                      onClick={() => setPlanet(index)}
                    >
                      <div className="flex my-2 items-center">
                        <div
                          className={`w-4 h-4 mx-5 rounded-full ${a_planet.color}`}
                        />
                        <h3
                          className={`text-white ${
                            index === planet && "animate-pulse"
                          }`}
                        >
                          {a_planet.planet}
                        </h3>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-white mr-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* MD and beyond */}
          <ul className="self-center hidden md:flex w-[661px] max-w-full items-start justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
            {data.map((planet, index) => (
              <li
                key={index}
                className="text-white text-xs font-bold leading-6 tracking-wider uppercase self-stretch"
              >
                <div
                  onClick={() => setPlanet(index)}
                  className="text-p_lgray text-xs leading-6 tracking-wider self-stretch hover:text-white hover:font-extrabold hover:cursor-pointer"
                >
                  {planet.planet}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="bg-white/30 self-stretch  min-h-[1px] w-full mt-2" />
    </header>
  );
};

export default Nav;

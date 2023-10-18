"use client";

import React, { useEffect } from "react";

import Link from "next/link";

import Footer from "@/components/Footer";
import SizeLG from "@/components/sizeLG";
import SizeMD from "@/components/sizeMD";
import SizeSM from "@/components/sizeSM";

import usePlanets from "@/store/usePlanets";
import { useState } from "react";

import data from "./data";
/*
>> data
planet: 0-Mercury, 1-Venus, 3-Earth, 4-Mars, etc...
page: 0-overview, 1-internal strucure, 2-surface geology
*/

//-----------------------------
export default function Home() {
  const { planet } = usePlanets();
  const [page, setPage] = useState(0);
  const [color, setColor] = useState("");

  let screenSize = data[planet].screenSize;

  /**
   * @param {import("react").SetStateAction<number>} ind
   */
  function confPage(ind) {
    setPage(ind);
    setColor(data[planet].color);
  }

  useEffect(() => {
    setPage(0);
    setColor(data[planet].color);
  }, [planet]);

  return (
    <main className="w-full md:w-[95%] mx-auto">
      <div className="md:hidden  w-full h-fit">
        <div className="relative flex justify-around w-full ">
          <div
            onClick={() => confPage(0)}
            className=" text-p_lgray hover:cursor-pointer"
          >
            <h3 className="text-xl">OVERVIEW</h3>
            {page === 0 ? (
              <div className={`h-1 mt-2 w-[80px] ${color}`}></div>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={() => confPage(1)}
            className=" text-p_lgray hover:cursor-pointer"
          >
            <h3 className="text-xl">STRUCTURE</h3>
            {page === 1 ? (
              <div className={`h-1 mt-2 w-[85px] ${color}`}></div>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={() => confPage(2)}
            className=" text-p_lgray hover:cursor-pointer"
          >
            <h3 className="text-xl">SURFACE</h3>
            {page === 2 ? (
              <div className={`h-1 mt-2 w-[70px] ${color}`}></div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="bg-white/30  self-stretch min-h-[1px] w-full my-2 absolute top-[113px] left-0" />
      </div>
      <section className="flex w-full flex-col">
        <div className="flex flex-col lg:flex-row items-center w-full lg:h-[600px]">
          {/* LG */}
          <div className="hidden lg:block lg:w-2/3">
            <SizeLG planet={planet} page={page} />
          </div>
          {/* MD */}
          <div className="hidden md:flex justify-center items-center lg:hidden w-full h-[500px]">
            <SizeMD planet={planet} page={page} />
          </div>
          {/* SM */}
          <div className="flex md:hidden justify-center items-center  w-full h-[400px]">
            <SizeSM planet={planet} page={page} />
          </div>
          <div className="w-full flex flex-col md:w-[95%] md:mb-10 lg:mb-0 md:flex-row md:justify-between lg:flex-col lg:w-1/3">
            <div className="flex flex-col justify-center items-center md:block">
              <h2 className="text-white  lg:text-7xl">{data[planet].planet}</h2>
              <p className="text-white text-sm leading-6 h-[140px] w-[90%] md:w-[380px] max-w-full mt-7">
                {data[planet].texts[page]}
              </p>
              <div className="flex w-[164px] max-w-full items-center mt-4 mb-5">
                <Link
                  href="https://en.wikipedia.org/wiki/Solar_System"
                  target="_blank"
                  className="text-white text-sm font-bold leading-6 opacity-50 underline w-fit"
                >
                  <span>Source:</span>
                  <span className="font-bold">Wikipedia</span>
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="ml-1"
                >
                  <path
                    fill="#FFF"
                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                    opacity=".5"
                  />
                </svg>
              </div>
            </div>

            {/* ----------------------- */}
            <div className="hidden md:block">
              <div
                onClick={() => confPage(0)}
                className={`flex w-[350px] max-w-full flex-col mt-7 px-5 py-3 ${
                  page === 0
                    ? `${color} border-0`
                    : "border-2 border-p_lgray hover:bg-p_lgray"
                }`}
              >
                <div className="flex w-full items-start justify-start gap-5 ml-2">
                  <div className="text-white text-xs font-bold leading-6 tracking-[2.571px] opacity-50 self-stretch">
                    01
                  </div>
                  <div className="text-white text-xs font-bold leading-6 tracking-[2.571px] uppercase self-stretch">
                    OVERVIEW
                  </div>
                </div>
              </div>
              <div
                onClick={() => confPage(1)}
                className={`border flex w-[350px] max-w-full flex-col mt-4 px-5 py-5 ${
                  page === 1
                    ? `${color} border-0`
                    : "border-2 border-p_lgray hover:bg-p_lgray"
                }`}
              >
                <div className="flex w-full items-start justify-start gap-5 ml-2">
                  <div className="text-white text-xs font-bold leading-6 tracking-[2.571px] uppercase opacity-50 self-stretch">
                    02
                  </div>
                  <div className="text-white text-xs font-bold leading-6 tracking-[2.571px] uppercase self-stretch">
                    Internal Structure
                  </div>
                </div>
              </div>
              <div
                onClick={() => confPage(2)}
                className={`border flex w-[350px] max-w-full flex-col mt-4 px-5 py-5 ${
                  page === 2
                    ? `${color} border-0`
                    : "border-2 border-p_lgray hover:bg-p_lgray"
                }`}
              >
                <div className="flex w-full items-start justify-start gap-5 ml-2">
                  <div className="text-white text-xs font-bold leading-6 tracking-[2.571px] uppercase opacity-50 self-stretch">
                    03
                  </div>
                  <div className="text-white text-xs font-bold leading-6 tracking-[2.571px] uppercase self-stretch">
                    Surface Geology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer planet={planet} />
    </main>
  );
}

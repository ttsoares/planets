import React from "react";

import data from "@/app/data";

const Footer = ({ planet }) => {
  return (
    <section className="self-center w-[95%] mx-auto md:w-full mt-2 px-5  ">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch space-y-1">
        <div className="flex flex-col items-stretch w-1/4 max-md:w-full">
          <div className="border flex w-full max-w-full justify-between items-center grow md:flex-col mx-auto py-2 px-5 border-solid border-white/30">
            <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-6 tracking-wider  opacity-50 ml-1">
              ROTATION TIME
            </div>
            <div className="text-white text-3xl lg:text-4xl tracking-tighter  ml-1 md:mt-4">
              {data[planet].rotation} HOURS
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-1/4 md:ml-5 max-md:w-full">
          <div className="border flex w-full max-w-full justify-between items-center grow md:flex-col mx-auto py-2 px-5 border-solid border-white/30">
            <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-6 tracking-wider  opacity-50 ml-1">
              REVOLUTION TIME
            </div>
            <div className="text-white text-3xl lg:text-4xl tracking-tighter  ml-1 md:mt-4">
              {data[planet].revolution} {planet < 3 ? "DAYS" : "YEARS"}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-1/4 md:ml-5 max-md:w-full">
          <div className="border flex w-full max-w-full justify-between items-center grow md:flex-col mx-auto  py-2 px-5 border-solid border-white/30">
            <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold leading-6 tracking-wider  opacity-50 ml-1">
              RADIUS
            </div>
            <div className="text-white text-3xl lg:text-4xl tracking-tighter  ml-1 md:mt-4 ">
              {data[planet].radious} KM
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-1/4 md:ml-5 max-md:w-full">
          <div className="border flex w-full max-w-full justify-between items-center grow md:flex-col mx-auto py-2 px-5 border-solid border-white/30">
            <div className="text-white text-xs md:text-2xl lg:text-3xl font-bold leading-6 tracking-wider  opacity-50 ml-1">
              AVERAGE TEMP.
            </div>
            <div className="text-white text-3xl lg:text-4xl tracking-tighter  ml-1 md:mt-4">
              {data[planet].avgtemp} ºC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";

import Image from "next/image";

import data from "@/app/data";

import { cn } from "../app/tw-util.js";

const SizeSM = ({ planet, page }) => {
  return (
    <div
      className={cn("relative mx-auto", {
        "w-[60px] h-[60px]": planet === 0,
        "w-[170px] h-[170px]": planet === 1,
        "w-[220px] h-[220px]": planet === 2,
        "w-[206px] h-[206px]": planet === 3,
        "w-[352px] h-[352px]": planet === 4,
        "w-[370px] h-[370px]": planet === 5,
        "w-[228px] h-[228px]": planet === 6,
        "w-[215px] h-[215px]": planet === 7,
      })}
    >
      <Image
        src={`/images${data[planet].imgs[page]}`}
        alt={data[planet].planet}
        fill
      />
    </div>
  );
};

export default SizeSM;

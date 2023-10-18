import React from "react";

import Image from "next/image";

import data from "@/app/data";

import { cn } from "../app/tw-util.js";

const SizeMD = ({ planet, page }) => {
  return (
    <div
      className={cn("relative mx-auto", {
        "w-[140px] h-[140px]": planet === 0,
        "w-[250px] h-[250px]": planet === 1,
        "w-[300px] h-[300px]": planet === 2,
        "w-[286px] h-[286px]": planet === 3,
        "w-[432px] h-[432px]": planet === 4,
        "w-[450px] h-[450px]": planet === 5,
        "w-[308px] h-[308px]": planet === 6,
        "w-[295px] h-[295px]": planet === 7,
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

export default SizeMD;

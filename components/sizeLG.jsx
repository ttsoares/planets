import React from "react";

import Image from "next/image";

import data from "@/app/data";

import { cn } from "../app/tw-util.js";

const SizeLG = ({ planet, page }) => {
  return (
    <div
      className={cn("relative mx-auto", {
        "w-[290px] h-[290px]": planet === 0,
        "w-[400px] h-[400px]": planet === 1,
        "w-[450px] h-[450px]": planet === 2,
        "w-[336px] h-[336px]": planet === 3,
        "w-[582px] h-[582px]": planet === 4,
        "w-[600px] h-[600px]": planet === 5,
        "w-[458px] h-[458px]": planet === 6,
        "w-[445px] h-[445px]": planet === 7,
      })}
    >
      <Image
        src={`/images${data[planet].imgs[page]}`}
        alt={data[planet].planet}
        fill
      />
      {page === 2 && (
        <Image
          src={`/images${data[planet].imgs[page + 1]}`}
          alt="Surface Geology"
          width={163}
          height={163}
          className={cn("absolute hidden md:block", {
            "top-[210px] left-[65px]": planet === 0,
            "top-[275px] left-[120px]": planet === 1,
            "top-[302px] left-[145px]": planet === 2,
            "top-[240px] left-[85px]": planet === 3,
            "top-[364px] left-[210px]": planet === 4,
            "top-[340px] left-[220px]": planet === 5,
            "top-[306px] left-[146px]": planet === 6,
            "top-[302px] left-[141px]": planet === 7,
          })}
        />
      )}
    </div>
  );
};

export default SizeLG;

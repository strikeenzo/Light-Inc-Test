import React from "react";
import { ReactComponent as ArrowDownGray } from "../assets/icons/arrow_down_gray.svg";

const Paginator = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li className="flex items-center justify-center w-[32px] h-[32px]">
          <a href="#">
            <ArrowDownGray />
          </a>
        </li>
        <li className="flex items-center justify-center w-[32px] h-[32px] bg-[#E0F2FE]">
          <a
            href="#"
            className="font-medium text-[14px] leading-[20px] text-[#0284C7]"
          >
            1
          </a>
        </li>
        <li className="flex items-center justify-center w-[32px] h-[32px]">
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#78716C]"
          >
            2
          </a>
        </li>

        <li className="flex items-center justify-center w-[32px] h-[32px]">
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#78716C]"
          >
            3
          </a>
        </li>

        <li className="flex items-center justify-center w-[32px] h-[32px]">
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#78716C]"
          >
            4
          </a>
        </li>

        <li className="flex items-center justify-center w-[32px] h-[32px]">
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#78716C]"
          >
            ...
          </a>
        </li>

        <li className="flex items-center justify-center w-[32px] h-[32px]">
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#78716C]"
          >
            13
          </a>
        </li>
        <li className="flex items-center justify-center w-[32px] h-[32px]">
          <a href="#">
            <ArrowDownGray />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginator;

import React from "react";

import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow_down.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="px-[24px] bg-[#292524] h-[52px] flex justify-between w-[100%]">
      <div className="flex items-center">
        <div className="h-[36px] w-[36px] rounded-[4px] bg-[#FFFFFF] opacity-[.2]"></div>
        <button className="text-[18px] leading-[20px] font-medium text-[#ffffff] px-[21.33px] h-[100%] flex items-center">
          Acme Inc
          <ArrowDownIcon className="ml-[21.33px]" />
        </button>
        <div className="w-[1px] h-[36px] bg-[#44403C]"></div>
        <div className="text-[#ffffff] ml-[56px]">
          <a
            href="#"
            className="font-medium text-[14px] leading-[20px] opacity-[.8] hover:opacity-[1]"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium text-[14px] leading-[20px] ml-[40px]"
          >
            Invoices
            <span className="w-[24px] h-[24px] bg-[#ffffff] rounded-[4px] text-[#292524] px-[4px] ml-[4px]">
              32
            </span>
          </a>
          <a
            href="#"
            className="font-medium text-[14px] leading-[20px] opacity-[.8] ml-[40px] hover:opacity-[1]"
          >
            Vendors
          </a>
          <a
            href="#"
            className="font-medium text-[14px] leading-[20px] opacity-[.8] ml-[40px] hover:opacity-[1]"
          >
            Insights
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center mr-[32px]">
          <div className="flex items-center flex-row w-[402px] h-[40px] bg-[#000]/[.2] rounded-[4px] px-[16px] py-[10px] gap-[8px] shadow-[0_2px_2px_rgba(0,0,0,0.2)]">
            <SearchIcon className="opacity-[.5] font-medium text-[14px] leading-[20px]" />
            <input
              type="text"
              className="text-[#fff] bg-[#000]/[0] placeholder-[#FAFAF9]/[.5] border-0 outline-0 w-[80%]"
              placeholder="Ask Ray..."
            />
            <span className="font-medium text-[12px] leading-[16px] text-[#FAFAF9]/[.5]">
              CMD+K
            </span>
          </div>
        </div>
        <div className="flex items-center mr-[32px]">
          <a
            href="#"
            className="leading-[20px] text-[14px] font-medium text-[#fff] opacity-[.8] hover:opacity-[1]"
          >
            Logs
          </a>
          <a
            href="#"
            className="leading-[20px] text-[14px] font-medium text-[#fff] opacity-[.8] ml-[32px] hover:opacity-[1]"
          >
            Liquidity
          </a>
          <a
            href="#"
            className="leading-[20px] text-[14px] font-medium text-[#fff] opacity-[.8] ml-[32px] hover:opacity-[1]"
          >
            Policies
          </a>
        </div>
        <button className="flex items-center">
          <div className="w-[36px] h-[36px] bg-[#000] rounded-[18px] mr-[8px]"></div>
          <ArrowDownIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;

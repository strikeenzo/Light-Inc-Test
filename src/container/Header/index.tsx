import React from "react";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow_down.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

const Header = () => {
  return (
    <div className="px-[24px] bg-[#292524] h-[52px] flex justify-between w-[100%]">
      <div className="flex items-center">
        <div className="h-[36px] w-[36px] rounded-[4px] bg-[#FFFFFF] opacity-[.2]"></div>
        <button className="text-[18px] leading-[20px] font-medium text-[#ffffff] px-[21.33px] h-[100%] flex items-center">
          Acme Inc
          <ArrowDownIcon className="ml-[21.33px]" />
        </button>
        <div className="w-[1px] h-[36px] bg-[#44403C]"></div>
        <div className="text-[#ffffff] ml-[56px]">
          <a className="font-medium text-[14px] leading-[20px] opacity-[.8]">
            Home
          </a>
          <a className="font-medium text-[14px] leading-[20px] ml-[40px]">
            Invoices
            <span className="w-[24px] h-[24px] bg-[#ffffff] rounded-[4px] text-[#292524] px-[4px] ml-[4px]">
              32
            </span>
          </a>
          <a className="font-medium text-[14px] leading-[20px] opacity-[.8] ml-[40px]">
            Vendors
          </a>
          <a className="font-medium text-[14px] leading-[20px] opacity-[.8] ml-[40px]">
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
              className="text-[#FAFAF9]/[.5] bg-[#000]/[0] placeholder-[#FAFAF9]/[.5] border-0 outline-0 w-[80%]"
              placeholder="Ask Ray..."
            />
            <span className="font-medium text-[12px] leading-[16px] text-[#FAFAF9]/[.5]">
              CMD+K
            </span>
          </div>
        </div>
        <div className="flex items-center mr-[32px]">
          <a className="leading-[20px] text-[14px] font-medium text-[#fff] opacity-[.8]">
            Logs
          </a>
          <a className="leading-[20px] text-[14px] font-medium text-[#fff] opacity-[.8] ml-[32px]">
            Liquidity
          </a>
          <a className="leading-[20px] text-[14px] font-medium text-[#fff] opacity-[.8] ml-[32px]">
            Policies
          </a>
        </div>
        <button className="flex items-center">
          <div className="w-[36px] h-[36px] bg-[#000] rounded-[18px] mr-[8px]"></div>
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;

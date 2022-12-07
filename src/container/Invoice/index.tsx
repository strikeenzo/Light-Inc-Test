import React from "react";
import { ReactComponent as Dot } from "../../assets/dot.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_black.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

const Invoice = () => {
  return (
    <>
      <div className="flex justify-between mt-[40px]">
        <h1 className="font-medium text-[24px] leading-[32px] text-[#292524]">
          Invoices
        </h1>
        <button className="font-medium text-[14px] leading-[20px] px-[12px] py-[6px] border-[1px] border-[#E7E5E4] rounded-[4px] drop-shadow-[0_1px_0px_rgba(0,0,0,0.04)] box-border">
          New Invoices
        </button>
      </div>
      <div>
        <div className="border-b-[1px] p-[8px] mt-[16px]">
          <a className="font-medium text-[14px] leading-[20px] p-[8px] border-b-[1px] border-[#000]">
            Inbox
          </a>
          <a className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] relative text-[#78716C]">
            Approving
            <span className="font-bold text-[9px] leading-[20px] absolute top-[3px] right-0 text-[#A8A29E]">
              1
            </span>
          </a>
          <a className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] text-[#78716C]">
            Scheduled
          </a>
          <a className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] text-[#78716C] relative">
            Processing
            <Dot className="font-bold text-[9px] leading-[20px] absolute top-[6px] right-0 text-[#A8A29E]" />
          </a>
          <a className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] text-[#78716C] relative">
            Paid
            <span className="font-bold text-[9px] leading-[20px] absolute top-[3px] right-[-10px] text-[#A8A29E]">
              321
            </span>
          </a>
        </div>
        <div>
          <div className="flex items-center mr-[32px] mt-[16px]">
            <div className="flex items-center flex-row w-[402px] h-[40px] bg-[#E7E5E4] rounded-[4px] px-[16px] py-[10px] gap-[8px]">
              <SearchIcon className="" />
              <input
                type="text"
                className="text-[#78716C] bg-[#000]/[0] placeholder-[#78716C] border-0 outline-0 w-[100%]"
                placeholder="Search..."
              />
            </div>
            <button className="flex ml-[16px] text-medium text-[14px] leading-[20px] text-[#57534E]">
              <PlusIcon className="mr-[4px]" />
              Add filter
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;

import React from "react";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow_left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow_right.svg";
import { ReactComponent as CrossIcon } from "../../assets/icons/cross.svg";
import Detail from "./detail";
import { InvoiceModalProps } from "../../types";

const InvoiceModal: React.FC<InvoiceModalProps> = (props): JSX.Element => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-[#1E1E1E]/[.6] pt-[76px]">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none py-[14px] h-full max-w-[1728px]">
        <div className="flex justify-between border-b-[1px] border-[#E7E5E4] pb-[12px] px-[24px]">
          <h1 className="text-[#292524] text-[24px] leading-[32px] font-medium">
            Invoice #123456
          </h1>
          <div className="flex items-center">
            <button className="text-[14px] leading-[20px] font-medium text-[#fff] px-[12px] py-[10px] bg-[#292524] rounded-[4px] hover:text-gray-300 active:text-gray-400">
              Submit for approval
            </button>
            <button className="w-[40px] h-[40px] flex justify-center items-center border-[1px] border-[#E7E5E4] rounded-[4px] ml-[8px] hover:border-[#0284C7] hover:bg-gray-100 active:bg-gray-200">
              <TrashIcon />
            </button>
            <div className="flex ml-[24px] items-center">
              <button className="w-[32px] h-[40px] flex justify-center items-center border-[1px] border-[#E7E5E4] rounded-[4px] hover:border-[#0284C7] hover:bg-gray-100 active:bg-gray-200">
                <ArrowLeft />
              </button>
              <p className="font-medium text-[14px] leading-[20px] text-[#A8A29E] w-[40px] text-center">
                1/12
              </p>
              <button className="w-[32px] h-[40px] flex justify-center items-center border-[1px] border-[#E7E5E4] rounded-[4px] hover:border-[#0284C7] hover:bg-gray-100 active:bg-gray-200">
                <ArrowRight />
              </button>
            </div>
            <button
              className="w-[40px] h-[40px] flex justify-center items-center border-[1px] bg-[#F5F5F4] rounded-[4px] ml-[24px] hover:border-[#0284C7] hover:bg-gray-100 active:bg-gray-200"
              onClick={() => props.setShowModal(false)}
            >
              <CrossIcon />
            </button>
          </div>
        </div>
        <div className="max-h-full flex overflow-y-auto">
          <aside className="w-[27.49%] px-[24px]">
            <div className="h-[52px] flex items-center">
              <a
                href="#"
                className="font-medium text-[14px] leading-[20px] py-[15px] border-b-[1px] border-[#1C1917]"
              >
                Details
              </a>
              <a
                href="#"
                className="font-medium text-[14px] leading-[20px] py-[15px] text-[#78716C] ml-[16px] hover:text-[inherit] hover:border-b-[1px] hover:border-[#1C1917]"
              >
                History
              </a>
            </div>
            <Detail />
          </aside>
          <div className="w-[72.51%] bg-[#F5F5F4] px-[24px] pt-[24px]">
            <img
              src="/assets/invoice.png"
              alt="Invoice"
              className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;

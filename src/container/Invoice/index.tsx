import React, { useState } from "react";
import { ReactComponent as Dot } from "../../assets/dot.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_black.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as InvoiceIcon } from "../../assets/icons/invoice.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/setting.svg";
import InvoiceTable from "../../components/InvoiceTable";
import Paginator from "../../components/Paginator";
import InvoiceModal from "../../components/InvoiceModal/index";
const { mockData } = require("../../mock.json");

const Invoice = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-between mt-[40px]">
        <h1 className="font-medium text-[24px] leading-[32px] text-[#292524]">
          Invoices
        </h1>
        <button
          className="font-medium text-[14px] leading-[20px] px-[12px] py-[6px] border-[1px] border-[#E7E5E4] hover:border-[#0284C7] hover:bg-gray-100 rounded-[4px] drop-shadow-[0_1px_0px_rgba(0,0,0,0.04)] box-border"
          onClick={() => setShowModal(true)}
        >
          New Invoices
        </button>
      </div>
      <div>
        <div className="border-b-[1px] p-[8px] mt-[16px] flex justify-between">
          <div>
            <a
              href="#"
              className="font-medium text-[14px] leading-[20px] p-[8px] border-b-[1px] border-[#000]"
            >
              Inbox
            </a>
            <a
              href="#"
              className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] relative text-[#78716C] hover:text-[inherit] hover:border-b-[1px] hover:border-[#000]"
            >
              Approving
              <span className="font-bold text-[9px] leading-[20px] absolute top-[3px] right-0 text-[#A8A29E]">
                1
              </span>
            </a>
            <a
              href="#"
              className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] text-[#78716C] hover:text-[inherit] hover:border-b-[1px] hover:border-[#000]"
            >
              Scheduled
            </a>
            <a
              href="#"
              className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] text-[#78716C] hover:text-[inherit] hover:border-b-[1px] hover:border-[#000] relative"
            >
              Processing
              <Dot className="font-bold text-[9px] leading-[20px] absolute top-[6px] right-0 text-[#A8A29E]" />
            </a>
            <a
              href="#"
              className="font-medium text-[14px] leading-[20px] p-[8px] ml-[16px] text-[#78716C] hover:text-[inherit] hover:border-b-[1px] hover:border-[#000] relative"
            >
              Paid
              <span className="font-bold text-[9px] leading-[20px] absolute top-[3px] right-[-10px] text-[#A8A29E]">
                321
              </span>
            </a>
          </div>
          <div>
            <button className="p-[12px]">
              <SettingIcon />
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center mr-[32px] mt-[16px]">
            <div className="flex items-center flex-row w-[402px] h-[40px] bg-[#E7E5E4] rounded-[4px] px-[16px] py-[10px] gap-[8px]">
              <SearchIcon className="" />
              <input
                type="text"
                className="text-gray-900 bg-[#000]/[0] placeholder-[#78716C] border-0 outline-0 w-[100%]"
                placeholder="Search..."
              />
            </div>
            <button className="flex ml-[16px] text-medium text-[14px] leading-[20px] text-[#57534E] hover:text-gray-900">
              <PlusIcon className="mr-[4px]" />
              Add filter
            </button>
          </div>
          <InvoiceTable data={mockData} />
        </div>
        <div className="flex justify-between my-[20px]">
          <div className="flex items-center">
            <InvoiceIcon />
            <div className="font-medium text-[12px] leading-[16px] ml-[10px]">
              <p className="text-[#000]">Send or forward invoices to</p>
              <span className="text-[#EA580C]">company@inbox.light.inc</span>
            </div>
          </div>
          <div className="flex items-center ml-[20px]">
            <Paginator />
            <select className="border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[10px] font-normal text-[14px] text-[#44403C] leading-[20px] hover:cursor-pointer">
              <option
                value="50"
                className="font-normal text-[14px] text-[#44403C] leading-[20px]"
              >
                50/page
              </option>
            </select>
          </div>
        </div>
        {showModal ? <InvoiceModal setShowModal={setShowModal} /> : null}
      </div>
    </>
  );
};

export default Invoice;

import React from "react";
import { InvoiceItemProps } from "../types";
import { ReactComponent as Check } from "../assets/icons/check.svg";
import { ReactComponent as Bell } from "../assets/bell.svg";
import { ReactComponent as Allowed } from "../assets/icons/allowed.svg";
import { ReactComponent as CornerUpRight } from "../assets/icons/corner_up_right.svg";
import { ReactComponent as YellowCheck } from "../assets/icons/yellow_check.svg";

const InvoiceItem: React.FC<InvoiceItemProps> = (props): JSX.Element => {
  return (
    <tr className="border-b-[1px] border-[#E7E5E4]">
      <td className="w-[2.08%] px-[8px] py-[16px] flex items-center">
        <input
          className="min-w-[20px] min-h-[20px] border-[1px] border-[#A8A29E] rounded-[4px]"
          type="checkbox"
        />
      </td>
      <td className="px-[10px] text-start w-[17.59%]">
        <span
          className={`flex items-center ${
            props.vendor.missing && "text-[#A8A29E]"
          }`}
        >
          <img src={props.vendor.image} className="rounded-[12px] mr-[8px]" />
          {props.vendor.name}
          {props.vendor.checked && <Allowed className="ml-[2px]" />}
        </span>
      </td>
      <td className="px-[10px] text-start w-[22.68%]">
        <p className="text-[#57534E] font-normal">{props.description}</p>
      </td>
      <td className="px-[10px] text-start w-[12.5%]">
        {props.status.type == "scanned" ? (
          <span className="rounded-[36px] flex w-fit items-center text-[12px] leading-[16px] text-[#78716C] bg-[#F5F5F4] h-[20px] px-[12px] py-[10px]">
            <Check className="mr-[4px]" />
            {props.status.description}
          </span>
        ) : (
          <span className="rounded-[36px] flex w-fit items-center text-[12px] leading-[16px] text-[#78716C] bg-[#F5F5F4] h-[20px] px-[12px] py-[10px]">
            <span className="text-[#D97706]">{props.status.description}</span>
            <YellowCheck className="ml-[14px] mr-[2px]" />1 / 3
          </span>
        )}
      </td>
      <td
        className={`px-[10px] text-start w-[20.14%] text-[${props.stage.color}] font-normal`}
      >
        {props.stage.time}
      </td>
      <td className="px-[10px] text-start w-[20.14%]">
        {props.approver.image ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={props.approver.image} />
              <span className="ml-[8px] text-[#292524]">
                {props.approver.name}
              </span>
            </div>
            {props.approver.button?.type === "bell" ? (
              <a className="flex items-center text-[#0284C7] mr-[18px] text-[12px] leading-[16px]">
                <Bell className="mr-[6px]" />
                Remind
              </a>
            ) : (
              <a className="flex items-center text-[#0284C7] mr-[18px] text-[12px] leading-[16px]">
                <CornerUpRight className="mr-[6px]" />
                Re-assign
              </a>
            )}
          </div>
        ) : (
          <div className="flex items-center">
            <div className="bg-[#E7E5E4] rounded-[12px] w-[24px] h-[24px]"></div>
            <span className="ml-[8px] text-[#A8A29E]">Not set</span>
          </div>
        )}
      </td>
      <td className="px-[10px] text-start w-[8.79%]">
        <span className="font-normal">{props.paym.time}</span>
      </td>
      <td className="px-[10px] text-start">
        <p className="text-end px-[16px]">${props.paid}</p>
      </td>
    </tr>
  );
};

export default InvoiceItem;

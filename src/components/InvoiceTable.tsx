import React from "react";
import { InvoiceItemProps, InvoiceTableProps } from "../types";
import InvoiceItem from "./InvoiceItem";

const InvoiceTable: React.FC<InvoiceTableProps> = (props): JSX.Element => {
  const mockData = props.data;
  return (
    <table className="table-fixed w-[100%] border-[1px] border-[#E7E5E4] rounded-[4px]">
      <tbody className="font-medium text-[14px] leading-[20px] text-[#292524]">
        <tr className="border-b-[1px] border-[#E7E5E4] font-medium text-[#44403C] text-[12px] leading-[16px]">
          <th className="w-[2.08%] p-[8px] flex items-center">
            <input
              className="min-w-[20px] min-h-[20px] border-[1px] border-[#A8A29E] rounded-[4px]"
              type="checkbox"
            />
          </th>
          <th className="px-[10px] text-start w-[17.59%]">Vendor</th>
          <th className="px-[10px] text-start w-[22.68%]">Description</th>
          <th className="px-[10px] text-start w-[12.5%]">Status</th>
          <th className="px-[10px] text-start w-[7.4%]">Time in stage</th>
          <th className="px-[10px] text-start w-[20.14%]">Approver</th>
          <th className="px-[10px] text-start w-[8.79%]">Paym. date</th>
          <th className="px-[10px] text-start">To be paid</th>
        </tr>
        {mockData.map((item: InvoiceItemProps) => {
          return <InvoiceItem {...item} key={`invoice_${item?.id}`} />;
        })}
      </tbody>
    </table>
  );
};

export default InvoiceTable;

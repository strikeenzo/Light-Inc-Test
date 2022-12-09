import React from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down_gray.svg";
import { ReactComponent as ListCheckIcon } from "../../assets/icons/list_checks.svg";
import { ReactComponent as UnitedStates } from "../../assets/united_states.svg";
import { ReactComponent as Slider } from "../../assets/slider.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow_right.svg";

const Detail = () => {
  return (
    <>
      <div className="w-full h-[74px] flex items-center border-[1px] border-[#E7E5E4] rounded-[4px] mt-[16px] p-[16px]">
        <img
          src="/assets/missing.png"
          className="w-[42px] h-[42px] rounded-[21px]"
        />
        <div className="ml-[16px]">
          <span className="font-medium text-[16px] leading-[20px] text-[#1C1917]">
            Oracle
          </span>
          <div className="text-[#78716C] text-[12px] leading-[20px] font-normal">
            <a className="underline">oracle.com</a>
            <span>·billing@oracle.com</span>
          </div>
        </div>
        <button className="ml-[16px]">
          <ArrowDown />
        </button>
      </div>
      <div className="flex">
        <button className="w-[106px] h-[64px] border-[1px] border-[#E7E5E4] rounded-[4px] mt-[16px] px-[16px] py-[8px]">
          <p className="font-medium text-[12px] leading-[16px] text-[#78716C] text-start">
            Currency
          </p>
          <div className="w-full text-[#292524] text-[14px] leading-[32px] font-medium flex">
            <div className="flex items-center">
              <UnitedStates className="w-[20px] h-[20px] mr-[8px]" />
              USD
            </div>
            <ArrowDown className="ml-[8px]" />
          </div>
        </button>
        <button className="w-[100%] h-[64px] border-[1px] border-[#E7E5E4] rounded-[4px] mt-[16px] px-[16px] py-[8px] ml-[8px] flex justify-between items-center">
          <div>
            <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
              To be paid
            </p>
            <div>
              <span className="text-[#292524] text-[24px] leading-[32px] font-medium">
                32.159.00
              </span>
              <span className="text-[#78716C] text-[12px] leading-[16px] tracking-[0.01em] ml-[5px]">
                Tax 2102.12
              </span>
            </div>
          </div>
          <ArrowDown />
        </button>
      </div>
      <section className="mt-[24px]">
        <h2 className="font-medium text-[16px] leading-[20px] text-[#292524]">
          Payment details
        </h2>
        <button className="w-[100%] h-[52px] border-[1px] border-[#E7E5E4] rounded-[4px] mt-[16px] px-[16px] py-[8px] flex justify-between items-center">
          <div>
            <p className="font-medium text-[#78716C] text-[12px] text-start leading-[16px]">
              Payment date
            </p>
            <p className="text-[#0284C7] text-[14px] font-medium text-start leading-[20px]">
              Today
            </p>
          </div>
          <ArrowDown />
        </button>
        <div className="flex justify-between items-center mt-[10px]">
          <button className="w-[197.5px] h-[68px] border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[8px] flex justify-between items-center">
            <div>
              <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
                Pay from account
              </p>
              <div className="mt-[2px] flex">
                <img
                  src="/assets/missing.png"
                  className="w-[32px] h-[32px] rounded-[16px]"
                />
                <div className="ml-[8px]">
                  <p className="font-medium text-[14px] leading-[20px] text-start">
                    Dansk-Bank_dk
                  </p>
                  <p className="font-normal text-[12px] leading-[16px] text-[#78716C] text-start">
                    USD · XXXX 1023
                  </p>
                </div>
              </div>
            </div>
            <ArrowDown />
          </button>
          <Slider />
          <button className="w-[197.5px] h-[68px] border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[8px] flex justify-between items-center">
            <div>
              <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
                Send to account
              </p>
              <div className="mt-[2px] flex">
                <img
                  src="/assets/missing.png"
                  className="w-[32px] h-[32px] rounded-[16px]"
                />
                <div className="ml-[8px]">
                  <p className="font-medium text-[14px] leading-[20px] text-start">
                    Jyske-Bank
                  </p>
                  <p className="font-normal text-[12px] leading-[16px] text-[#78716C] text-start">
                    4321
                  </p>
                </div>
              </div>
            </div>
            <ArrowDown />
          </button>
        </div>
      </section>
      <section className="mt-[26px]">
        <h2 className="font-medium text-[16px] leading-[20px] text-[#292524]">
          Accounting details
        </h2>
        <article className="h-[52px] bg-[#F5F5F4] w-[100%] px-[16px] py-[8px] mt-[16px] rounded-[4px]">
          <p className="text-[#78716C] text-[12px] leading-[16px] font-medium">
            Note
          </p>
          <p className="text-[#1C1917] font-normal text-[14px] leading-[20px]">
            New laptop for the new marketing team
          </p>
        </article>
        <button className="w-[100%] h-[52px] border-[1px] border-[#E7E5E4] rounded-[4px] mt-[8px] px-[16px] py-[8px] flex justify-between items-center">
          <div>
            <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
              Cost center
            </p>
            <p className="text-[#292524] text-[14px] leading-[20px] font-medium text-start">
              Marketing
            </p>
          </div>
          <ArrowDown />
        </button>
        <div className="flex justify-between mt-[8px]">
          <button className="w-[48%] h-[52px] border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[8px] flex justify-between items-center">
            <div>
              <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
                Entity
              </p>
              <p className="text-[#292524] text-[14px] leading-[20px] font-medium text-start">
                DK-company
              </p>
            </div>
            <ArrowDown />
          </button>
          <button className="w-[48%] h-[52px] border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[8px] flex justify-between items-center">
            <div>
              <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
                Sync to Category
              </p>
              <p className="text-[#292524] text-[14px] leading-[20px] font-medium text-start">
                IT & Technology
              </p>
            </div>
            <ArrowDown />
          </button>
        </div>
        <div className="flex justify-between mt-[8px]">
          <button className="w-[48%] h-[52px] border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[8px] flex justify-between items-center">
            <div>
              <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
                Due date
              </p>
              <p className="text-[#292524] text-[14px] leading-[20px] font-medium text-start">
                22/11/2022
              </p>
            </div>
            <ArrowDown />
          </button>
          <button className="w-[48%] h-[52px] border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[8px] flex justify-between items-center">
            <div>
              <p className="font-medium text-[#78716C] text-[12px] leading-[16px] text-start">
                Invoice date
              </p>
              <p className="text-[#292524] text-[14px] leading-[20px] font-medium text-start">
                2/11/2022
              </p>
            </div>
            <ArrowDown />
          </button>
        </div>
        <button className="w-[100%] h-[52px] border-[1px] border-[#E7E5E4] rounded-[4px] px-[16px] py-[8px] flex justify-between items-center mt-[24px]">
          <div className="flex items-center">
            <ListCheckIcon />
            <p className="text-[#292524] text-[14px] leading-[20px] font-medium text-start ml-[10px]">
              Approvers
            </p>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-[12px] leading-[16px] text-[#78716C] px-[8px] py-[2px] rounded-[100px] border-[1px] border-[#D4D4D4] mr-[16px]">
              4 left
            </span>
            <ArrowRight />
          </div>
        </button>
      </section>
      <section className="mt-[26px]">
        <h2 className="font-medium text-[16px] leading-[20px] text-[#292524] mb-[16px]">
          Accounting details
        </h2>
        <table className="font-normal text-[14px] leading-[20px] text-[#44403C] w-full">
          <tbody>
            <tr className="w-full">
              <td className="border-[1px] border-[#E7E5E4] w-[74%] px-[16px] py-[8px]">
                <p>MacBook Pro 16/2.8/Tim</p>
                <p className="font-medium text-[12px] leading-[16px] text-[#78716C]">
                  IT & Technology
                </p>
              </td>
              <td className="border-[1px] border-[#E7E5E4] w-[26%] px-[16px] py-[8px]">
                <p className="text-end">2,199.00</p>
              </td>
            </tr>
            <tr className="w-full">
              <td className="border-[1px] border-[#E7E5E4] w-[74%] px-[16px] py-[8px]">
                <p>Magic Keyboard DK</p>
                <p className="font-medium text-[12px] leading-[16px] text-[#78716C]">
                  IT & Technology
                </p>
              </td>
              <td className="border-[1px] border-[#E7E5E4] w-[26%] px-[16px] py-[8px]">
                <p className="text-end">295.00</p>
              </td>
            </tr>
            <tr className="w-full">
              <td className="border-[1px] border-[#E7E5E4] w-[74%] px-[16px] py-[8px]">
                <p>Magic Trackpad DK</p>
                <p className="font-medium text-[12px] leading-[16px] text-[#78716C]">
                  IT & Technology
                </p>
              </td>
              <td className="border-[1px] border-[#E7E5E4] w-[26%] px-[16px] py-[8px]">
                <p className="text-end">199.00</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Detail;

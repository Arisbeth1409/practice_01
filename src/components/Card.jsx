import React from "react";

export default function Card(props) {
  return (
    <div className="p-[24px] rounded-[12px] bg-[#202127]">
      <div className="bg-[#414853] w-[48px] h-[48px] rounded-[6px] mb-[20px] flex items-center justify-center">
        {props.icon}
      </div>
      <h2 className="text-[16px] leading-[24px] font-semibold">
        {props.title}
      </h2>
      <p className="text-[#9f9f9f] text-[14px] leading-[24px] pt-[8px]">
        {props.subtitle}
      </p>
    </div>
  );
}

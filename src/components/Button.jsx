import React from "react";

export default function Button(props) {
  console.log(props);
  return (
    <div
      className={`cursor-pointer hover:bg-white hover:bg-opacity-20 transition text-sm h-[40px] flex items-center text-[#fffff5db] rounded-[20px] p-[15px] ${
        props.isActive ? "bg-[#646cff]" : "bg-[#32363f]"
      }`}
    >
      {props.icon && <>⚡</>}
      {props.text}
    </div>
  );
}

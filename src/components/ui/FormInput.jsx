import React from "react";

const FormInput = (props) => {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor=""
        className="para"
      >
        {props.label}
      </label>
      <div className="relative">
        <input
          type={props.type}
          placeholder={props.placeholder}
          className="input w-full text-sm md:text-base font-inter font-light border-[1px] border-solid border-[#F2F4F5] rounded-lg bg-[#F9FAFB] pl-11 pr-10 py-2.5 md:py-3 tracking-[-0.32px]"
        />        
        <span className="absolute top-1/2 left-3.5 translate-y-[-50%] text-[#98A2B3] text-lg md:text-[22px] font-bold">
        {props.icon}
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default FormInput;

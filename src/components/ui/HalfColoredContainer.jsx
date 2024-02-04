import Image from "next/image";
import React from "react";
import icon1 from "../../assets/Group 2.png";
import icon2 from "../../assets/Group 1.png";

const HalfColoredContainer = ({ children }) => {
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 z-10">
        <Image src={icon1} alt="" unoptimized={true} />
      </div>

      <div className="fixed bottom-0 left-0 z-10">
        <Image src={icon2} alt="" unoptimized={true} />
      </div>

      <div className="h-screen fixed z-0 top-[-250px] bottom-0 left-0 right-0 skew-y-[-12deg]">
        <div className="origin-[0%] h-[1698px] bg-[#FAFCFD] absolute top-[-100px] left-0 right-0"></div>
      </div>
      {children}
    </div>
  );
};

export default HalfColoredContainer;

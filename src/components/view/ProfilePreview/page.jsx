import Image from "next/image";
import React from "react";
import profile from "../../../assets/logo-search-grid-1x.png";
import { MdMovieCreation, MdEmail } from "react-icons/md";
import { HiTag } from "react-icons/hi";
import { TiWorld } from "react-icons/ti";

const ProfilePreview = ({ file }) => {
  return (
    <div className="md:basis-[35%] flex py-5 md:pl-10">
      <div className="w-full">
        <h2 className="heading">Profile Preview</h2>
        <div className="bg-[#29D4B9] w-full mt-7 relative">
          <div className="flex justify-center">
            <Image
              src={file ? file : profile}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "250px", height: "auto" }}
              unoptimized={true}
            />
          </div>
          <span className="absolute left-5 bottom-4 text-[8px] text-white font-semibold">
            COMPANY
          </span>
        </div>
        <div className="border-b-[8px] border-solid border-[#f1f1f1] pb-4">
          <span className="profileContent block py-3 pl-5 border-y-[8px] border-solid border-[#f1f1f1]">
            Business account
          </span>
          <ul className="pl-5 profileContent flex flex-col gap-6 mt-4">
            <li className="flex gap-4">
              <MdMovieCreation className="text-[#C2CCD9] text-[62px] mt-[-19px]" />{" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo non atque voluptatum. Maiores, dolore. Dolorem nihil
              aperiam et libero voluptatibus porro magnam sed ab illum, aliquam
              vel hic? Ab, fugiat!
            </li>
            <li className="flex gap-3 items-center">
              <HiTag className="text-[#C2CCD9]" /> Professional Services
            </li>
            <li className="flex gap-3 items-center font-inter font-normal text-[#29D4B9]">
              <MdEmail className="text-[#C2CCD9]" /> example@yahoo.com
            </li>
            <li className="flex gap-3 items-center font-inter font-normal text-[#29D4B9]">
              <TiWorld className="text-[#C2CCD9]" /> https://example.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;

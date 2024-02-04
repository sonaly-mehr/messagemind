"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "../../assets/logo-search-grid-1x.png";
import { LuPencilLine } from "react-icons/lu";
import ProfilePreview from "@/components/view/ProfilePreview/page";

const Profile = () => {
  const [file, setFile] = useState();
  function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <div className="flex w-[90%] m-auto h-full pb-12">
      <div className="basis-[65%] border-r-[1px] border-solid border-[#e4e4e4] py-5 pl-10 pr-24">
        <h3 className="subHeading">WhatsApp Business Profile</h3>
        <div className="contentLayout mt-12 ml-8">
          <div className="basis-2/5">
            <h6 className="profileSubHeading">Profile Picture</h6>
          </div>
          <div className="basis-3/5 flex flex-col justify-center">
            <div className="flex justify-center mb-3">
              <Image
                src={file ? file : profile}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "60px", height: "60px" }}
                className="rounded"
                unoptimized={true}
              />
            </div>
            <div class="relative overflow-hidden inline-block">
              <button class="bg-[#1193F0] font-medium tracking-wide p-3 w-full rounded-md text-white font-inter">
                Chnage Profile Picture
              </button>
              <input
                type="file"
                name="myfile"
                onChange={getFile}
                className="absolute left-0 top-0 opacity-0"
              />
            </div>
          </div>
        </div>

        <div className="contentLayout py-6 ml-8">
          <div className="basis-2/5">
            <h6 className="profileSubHeading">About Text</h6>
          </div>
          <span className="profileContent">Available 24/7</span>
          <span className="basis-[5%]">
            <LuPencilLine className="cursor-pointer" />
          </span>
        </div>

        {/* Business Profile */}
        <div className="mt-24">
          <h3 className="subHeading">Business Profile</h3>
          <div className="contentLayout py-7 ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">Address</h6>
            </div>
            <span className="basis-[55%] text-[#b8b8b8] font-inter font-normal italic">
              N/A
            </span>
            <span className="basis-[5%]">
              <LuPencilLine className="cursor-pointer" />
            </span>
          </div>
          <div className="contentLayout py-7 ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">Description</h6>
            </div>
            <span className="profileContent mr-1.5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              nostrum!
            </span>
            <span className="basis-[5%]">
              <LuPencilLine className="cursor-pointer" />
            </span>
          </div>
          <div className="contentLayout py-7 ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">Email</h6>
            </div>
            <span className="profileContent">example@yahoo.com</span>
            <span className="basis-[5%]">
              <LuPencilLine className="cursor-pointer" />
            </span>
          </div>
          <div className="contentLayout py-7 ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">Website Primary</h6>
            </div>
            <span className="profileContent">https://example.com</span>
            <span className="basis-[5%]">
              <LuPencilLine className="cursor-pointer" />
            </span>
          </div>
          <div className="contentLayout py-7 ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">Website Secondary</h6>
            </div>
            <span className="basis-[55%] text-[#b8b8b8] font-inter font-normal italic">
              N/A
            </span>
            <span className="basis-[5%]">
              <LuPencilLine className="cursor-pointer" />
            </span>
          </div>
          <div className="contentLayout py-7 ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">Business Vertical</h6>
            </div>
            <span className="profileContent">Professional Services</span>
            <span className="basis-[5%]">
              <LuPencilLine className="cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
      <ProfilePreview file={file} />
    </div>
  );
};

export default Profile;

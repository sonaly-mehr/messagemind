"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import profile from "../../assets/logo-search-grid-1x.png";
import { LuPencilLine } from "react-icons/lu";
import ProfilePreview from "@/components/view/ProfilePreview/page";
import SubmitButton from "@/components/ui/Button";

const Profile = () => {
  const ref = useRef(null);
  const [about, setAbout] = useState(false);
  const [address, setAddress] = useState(false);
  const [description, setDescription] = useState(false);
  const [email, setEmail] = useState(false);
  const [webPrimary, setWebPrimary] = useState(false);
  const [webSecondary, setWebSecondary] = useState(false);

  const [business, setBusiness] = useState(false);

  const descp = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
  nostrum!`;

  const [file, setFile] = useState();
  function getFile(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div>
      <div className="md:flex w-[90%] m-auto h-full pb-16 md:pb-5 relative profile">
        <div className="md:basis-[65%] md:border-r-[1px] border-solid border-[#e4e4e4] py-5 pl-2 pr-2 md:pl-10 md:pr-24">
          <h2 className="heading">WhatsApp Business Profile</h2>
          <div className="contentLayout mt-12 md:ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">Profile Picture</h6>
            </div>
            <div className="md:basis-3/5 flex flex-col justify-center">
              <div className="flex justify-center">
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
                <div className="flex justify-center">
                  <SubmitButton
                    type="button"
                    text="Chanage Profile Picture"
                    class="p-3"
                  />
                </div>
                <input
                  type="file"
                  name="myfile"
                  onChange={getFile}
                  className="absolute left-[78px] top-[12px] opacity-0 h-[55px] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="contentLayout py-6 md:ml-8">
            <div className="basis-2/5">
              <h6 className="profileSubHeading">About Text</h6>
            </div>
            {about ? (
            <input
              type="text"
              autoFocus 
              defaultValue="Available 24/7"
              className="profileContent InputField"
            />
             ) : (
               <span className="profileContent">Available 24/7</span>
            )} 
            <span className="basis-[5%]">
              <LuPencilLine
                className="cursor-pointer ml-1"
                onClick={()=> setAbout(!about)}
              />
            </span>
          </div>

          {/* Business Profile */}
          <div className="mt-16 md:mt-24">
            <h2 className="heading">Business Profile</h2>
            <div className="contentLayout py-7 md:ml-8">
              <div className="basis-2/5">
                <h6 className="profileSubHeading">Address</h6>
              </div>
              {address ? (
                <input
                  type="text"
                  defaultValue="N/A"
                  autoFocus 
                  className="profileContent InputField"
                />
              ) : (
                <span className="basis-[55%] text-[#b8b8b8] font-inter font-normal italic">
                  N/A
                </span>
              )}
              <span className="basis-[5%]">
                <LuPencilLine
                  className="cursor-pointer ml-1"
                  onClick={() => {
                    setAddress(!address);
                  }}
                />
              </span>
            </div>
            <div className="contentLayout py-7 md:ml-8">
              <div className="basis-2/5">
                <h6 className="profileSubHeading">Description</h6>
              </div>
              {description ? (
                <input
                  type="text"
                  autoFocus 
                  defaultValue={`${descp.slice(0, 45)}..`}
                  className="profileContent InputField"
                />
              ) : (
                <span className="profileContent mr-1.5">
                  {`${descp.slice(0, 45)}..`}
                </span>
              )}
              <span className="basis-[5%]">
                <LuPencilLine
                  className="cursor-pointer ml-1"
                  onClick={() => {
                    setDescription(!description);
                  }}
                />
              </span>
            </div>
            <div className="contentLayout py-7 md:ml-8">
              <div className="basis-2/5">
                <h6 className="profileSubHeading">Email</h6>
              </div>
              {email ? (
                <input
                  type="text"
                  autoFocus 
                  defaultValue="example@yahoo.com"
                  className="profileContent InputField"
                />
              ) : (
                <span className="profileContent">example@yahoo.com</span>
              )}
              <span className="basis-[5%]">
                <LuPencilLine
                  className="cursor-pointer ml-1"
                  onClick={() => {
                    setEmail(!email);
                  }}
                />
              </span>
            </div>
            <div className="contentLayout py-7 md:ml-8">
              <div className="basis-2/5">
                <h6 className="profileSubHeading">Website Primary</h6>
              </div>
              {webPrimary ? (
                <input
                  type="text"
                  autoFocus 
                  defaultValue="https://example.com"
                  className="profileContent InputField"
                />
              ) : (
                <span className="profileContent">https://example.com</span>
              )}
              <span className="basis-[5%]">
                <LuPencilLine
                  className="cursor-pointer ml-1"
                  onClick={() => {
                    setWebPrimary(!webPrimary);
                  }}
                />
              </span>
            </div>
            <div className="contentLayout py-7 md:ml-8">
              <div className="basis-2/5">
                <h6 className="profileSubHeading">Website Secondary</h6>
              </div>
              {webSecondary ? (
                <input
                  type="text"
                  autoFocus 
                  defaultValue="N/A"
                  className="profileContent InputField"
                />
              ) : (
                <span className="basis-[55%] text-[#b8b8b8] font-inter font-normal italic">
                  N/A
                </span>
              )}
              <span className="basis-[5%]">
                <LuPencilLine
                  className="cursor-pointer ml-1"
                  onClick={() => {
                    setWebSecondary(!webSecondary);
                  }}
                />
              </span>
            </div>
            <div className="contentLayout py-7 md:ml-8">
              <div className="basis-2/5">
                <h6 className="profileSubHeading">Business Vertical</h6>
              </div>
              {business ? (
                <input
                  type="text"
                  autoFocus 
                  defaultValue="Professional Services"
                  className="profileContent InputField"
                />
              ) : (
                <span className="profileContent">Professional Services</span>
              )}
              <span className="basis-[5%]">
                <LuPencilLine
                  className="cursor-pointer ml-1"
                  onClick={() => {
                    setBusiness(!business);
                  }}
                />
              </span>
            </div>
          </div>
          <div className="flex justify-center md:mt-5 absolute md:static bottom-0 left-1/2 translate-x-[-50%] md:translate-x-0 ">
            <SubmitButton type="button" text="Submit" class="py-3 md:py-3.5" />
          </div>
        </div>
        {/* Profile-Preview */}
        <ProfilePreview file={file} />
      </div>
    </div>
  );
};

export default Profile;

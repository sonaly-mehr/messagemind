"use client";
import Image from "next/image";
import icon1 from "../assets/Group 2.png";
import icon2 from "../assets/Group 1.png";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import { FiEye, FiEyeOff, FiUnlock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { Checkbox, Typography } from "@material-tailwind/react";
import Link from "next/link";

export default function Home() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility(e) {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (
    <div className="relative">
      <div className="fixed top-0 right-0 z-10">
        <Image src={icon1} alt="" unoptimized={true}/>
      </div>

      <div className="fixed bottom-0 left-0 z-10">
        <Image src={icon2} alt="" unoptimized={true}/>
      </div>

      <div className="h-screen half_colored">
        <div className="background_effect"></div>
      </div>

      <div className="w-2/5 m-auto h-full flex flex-col justify-center relative top-10 z-30">
        <div className="w-full">
          <div className="flex justify-center mb-6">
            <Image src={logo} alt="" unoptimized={true}/>
          </div>
          <div className="box_shaddow bg-white border-[1px] border-solid border-[#F2F4F5] rounded-2xl px-16 py-8">
            <h4 className="text-[#222] font-inter font-semibold text-[32px] text-center mb-5">
              Login
            </h4>
            <form action="">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="text-[#667085] text-base font-normal font-inter"
                  >
                    E-mail
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="E-mail"
                      className="input w-full text-base font-inter font-light border-[1px] border-solid border-[#F2F4F5] rounded-lg bg-[#F9FAFB] pl-11 pr-10 py-3 tracking-[-0.32px]"
                    />
                    <HiOutlineMail className="absolute top-1/2 left-3.5 translate-y-[-50%] text-[#98A2B3] text-[22px] font-bold" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className="text-[#667085] text-base font-normal font-inter"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Password"
                      className="input w-full text-base font-inter font-light border-[1px] border-solid border-[#F2F4F5] rounded-lg bg-[#F9FAFB] pl-11 pr-10 py-3 tracking-[-0.32px]"
                    />
                    <FiUnlock className="absolute top-1/2 left-3.5 translate-y-[-50%] text-[#98A2B3] text-[22px] font-bold" />
                    <button
                      className="absolute inset-y-0 right-0 flex items-center px-5 text-[#98A2B3] text-xl"
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center my-2.5">
                <Checkbox
                  label={
                    <Typography className="font-poppins italic text-[#667085] font-normal">
                      Remember Me
                    </Typography>
                  }
                />
                <Link
                  href="/"
                  className="text-[#55A0DE] font-inter font-normal italic"
                >
                  Forgot Password?
                </Link>
              </div>
              <button className="mt-5 mb-8 gradient_bg w-full py-4 text-white font-poppins font-semibold rounded-lg">
                Login
              </button>
            </form>
          </div>

          <ul className="flex justify-center gap-4 items-center text-[#667085] text-sm font-inter font-normal mt-28 mb-10">
            <li>
              <Link href="/">
                <Image src={logo2} alt="" unoptimized={true}/>
              </Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Terms of Use</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

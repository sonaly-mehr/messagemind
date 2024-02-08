"use client";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import logo2 from "../../../assets/logo2.svg";
import { FiEye, FiEyeOff, FiUnlock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";
import { Checkbox, Typography } from "@material-tailwind/react";
import Link from "next/link";
import HalfColoredContainer from "@/components/ui/HalfColoredContainer";
import FormInput from "@/components/ui/FormInput";
import SubmitButton from "@/components/ui/Button";
import Footer from "../Footer/page";

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility(e) {
    e.preventDefault();
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (
    <HalfColoredContainer>
      <div className="w-[90%] md:w-2/5 m-auto h-full flex flex-col justify-center relative top-10 z-30">
        <div className="w-full">
          <div className="flex justify-center mb-3 md:mb-6">
            <Image src={logo} alt="" unoptimized={true} />
          </div>
          <div className="box_shaddow bg-white border-[1px] border-solid border-[#F2F4F5] rounded-2xl px-7 md:px-16 py-8">
            <h2 className="heading mb-3 md:mb-8 text-center">Login</h2>
            <form action="">
              <div className="flex flex-col gap-5">
                <FormInput
                  label="E-mail"
                  type="text"
                  placeholder="E-mail"
                  icon={<HiOutlineMail />}
                />

                <FormInput
                  label="Password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  icon={<FiUnlock />}
                >
                  <button
                    className="absolute inset-y-0 right-0 flex items-center px-5 text-[#98A2B3] text-xl"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FiEyeOff /> : <FiEye />}
                  </button>
                </FormInput>
              </div>

              <div className="flex justify-between items-center my-2.5">
                <Checkbox  label={<Typography>Remember Me</Typography>} />
                <Link
                  href="/forgot-password"
                  className="text-[#55A0DE] font-inter font-normal italic text-xs md:text-base"
                >
                  Forgot Password?
                </Link>
              </div>
              <Link href="/welcome">
                <SubmitButton
                  type="submit"
                  text="Login"
                  class="w-full py-3 md:py-3.5"
                />
              </Link>
            </form>
          </div>

          <Footer />
          
        </div>
      </div>
    </HalfColoredContainer>
  );
}

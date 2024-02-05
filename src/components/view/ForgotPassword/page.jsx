"use client";
import SubmitButton from "@/components/ui/Button";
import FormInput from "@/components/ui/FormInput";
import HalfColoredContainer from "@/components/ui/HalfColoredContainer";
import Image from "next/image";
import logo from "../../../assets/logo.svg";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import Footer from "../Footer/page";

const ForgotPassword = () => {
  return (
    <HalfColoredContainer>
      <div className="w-[90%] md:w-2/5 m-auto h-full flex flex-col justify-center relative top-10 z-30">
        <div className="w-full">
          <div className="flex justify-center mb-3 md:mb-6">
            <Image src={logo} alt="" unoptimized={true} />
          </div>
          <div className="box_shaddow bg-white border-[1px] border-solid border-[#F2F4F5] rounded-2xl px-7 md:px-16 pt-10 md:pt-16 pb-10">
            <h2 className="heading text-center">Forgot Password</h2>
            <p className="para text-center mt-6 mb-4 md:mb-8">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
            <form action="">
              <div className="flex flex-col gap-5 mb-1 md:mb-4">
                <FormInput
                  label="E-mail"
                  type="text"
                  placeholder="E-mail"
                  icon={<HiOutlineMail />}
                />
              </div>

              <SubmitButton
                type="submit"
                text="Continue"
                class="w-full py-3 md:py-3.5"
              />
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </HalfColoredContainer>
  );
};

export default ForgotPassword;

"use client"
import React from "react";
import SubmitButton from "@/components/ui/Button";
import HalfColoredContainer from "@/components/ui/HalfColoredContainer";
import welcome from "../../assets/welcome.png";
import Image from "next/image";
import Footer from "@/components/view/Footer/page";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <HalfColoredContainer>
      <div className="w-[90%] md:w-2/5 m-auto h-full flex flex-col justify-center relative top-10 z-30">
        <div className="w-full">
          <div className="box_shaddow bg-white border-[1px] border-solid border-[#F2F4F5] rounded-2xl px-10 md:px-16 pt-8 md:pt-14 pb-6 md:pb-10">
            <div className="flex justify-center mb-6">
            <Image src={welcome} alt="" unoptimized={true}/>
            </div>
            <h2 className="heading">Welcome, Company name</h2>
            <p className="para text-center mt-4 md:mt-6 mb-3 md:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, tenetur?</p>

            <Link href="/profile">
              <SubmitButton type="submit" text="Get Started" />
              </Link>
          </div>
          <Footer />
        </div>
      </div>
    </HalfColoredContainer>
  );
};

export default ForgotPassword;

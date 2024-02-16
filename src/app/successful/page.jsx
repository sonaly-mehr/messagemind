"use client";
import React, { useEffect } from "react";
import HalfColoredContainer from "@/components/ui/HalfColoredContainer";
import SubmitButton from "@/components/ui/Button";
import Link from "next/link";

const SuccessfulPage = () => {
  // useEffect(()=> {
  //   if (typeof window !== 'undefined') {
  //     console.log('window.innerHeight', window.innerHeight);
  // }
  // }, [])
  return (
    <HalfColoredContainer>
      <div className="w-[90%] md:w-2/5 m-auto h-screen flex flex-col justify-center relative top-0 md:top-[-50px] z-30">
        <div className="w-full">
          <div className="box_shaddow bg-white border-[1px] border-solid border-[#F2F4F5] rounded-2xl px-7 md:px-16 pt-8 pb-6">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            <h2 className="heading text-center">
              Completed Successfully!
            </h2>
            <p className="para text-center mt-4 mb-4 md:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              saepe ipsum necessitatibus.
            </p>
            <Link href="/" className="flex justify-center">
              <SubmitButton text="Continue" />
            </Link>
          </div>
        </div>
      </div>
    </HalfColoredContainer>
  );
};

export default SuccessfulPage;

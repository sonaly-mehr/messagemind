import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../../assets/logo2.svg";

const Footer = () => {
  return (
    <>
      <ul className="flex justify-center gap-3 md:gap-4 items-center text-[#667085] text-xs md:text-sm font-inter font-normal mt-28 mb-10">
        <li>
          <Link href="/">
            <Image src={logo2} alt="" unoptimized={true} />
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
    </>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoSettingsOutline, IoMailUnreadOutline } from "react-icons/io5";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import bin from "../../assets/bin (1) 1.svg";

const TABLE_HEAD = [
  "Sr#",
  "Phone Number",
  "Display Name",
  "Quality Rating",
  "",
  "",
];

const TABLE_ROWS = [
  {
    phoneNumber: "283-511-3564",
    name: "John Michael",
    rating: "High",
  },
  {
    phoneNumber: "283-511-3564",
    name: "John Michael",
    rating: "High",
  },
  {
    phoneNumber: "283-511-3564",
    name: "John Michael",
    rating: "High",
  },
  {
    phoneNumber: "283-511-3564",
    name: "John Michael",
    rating: "High",
  },
];
const NumbersTable = () => {
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);
  return (
    <>
      <Card className="h-[500px] w-full mt-5 bg-white relative gradient_border rounded-[15px]">
        <table className="w-full min-w-max table-auto text-left overflow-hidden">
          {/* <div className="gradient_border">

          </div> */}
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="  p-8">
                  <Typography className="font-normal text-[#64748B] text-base font-montserrat">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ phoneNumber, name, rating }, index) => {
              const classes = "p-4 bg-[#F4F4FB]";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography className="font-normal text-[#64748B] text-base font-montserrat">
                      {index <= 9 ? `0${index + 1}` : index + 1}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography className="font-normal text-base font-montserrat">
                      +1 {phoneNumber}{" "}
                      <span className="font-normal text-xs font-montserrat text-white bg-pink inline-block px-2 rounded-md ml-2">
                        Live
                      </span>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography className="font-normal text-base font-montserrat">
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography className="font-normal text-pink text-base font-montserrat">
                      {rating}
                    </Typography>
                  </td>
                  <td className={`${classes} flex gap-4`}>
                    <Typography
                      as="a"
                      href="#"
                      className="font-normal text-sm font-montserrat text-[#515151] flex items-center ml-[-25px] justify-center gap-1 w-[190px] py-2 rounded-3xl button-shaddow bg-white"
                    >
                      <IoSettingsOutline className="text-lg" />
                      WhatsApp Settings
                    </Typography>

                    <Typography
                      as="a"
                      href="#"
                      className="font-normal text-sm font-montserrat text-[#515151] flex items-center justify-center gap-1 w-[125px] py-2 rounded-3xl bg-white"
                    >
                      <IoMailUnreadOutline className="text-lg" />
                      Web Inbox
                    </Typography>
                    <Typography
                      as="a"
                      href="#"
                      className="font-normal text-sm font-montserrat text-[#515151] flex items-center justify-center gap-1 w-[125px] py-2 rounded-3xl bg-white"
                    >
                      <IoSettingsOutline className="text-lg" />
                      AI Settings
                    </Typography>
                  </td>
                  <td className={classes}>
                    <AiOutlineDelete
                      onClick={() => handleOpen("xs")}
                      className="text-pink text-lg cursor-pointer"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* DELETE-POPUP */}
      <Dialog
        open={size === "xs"}
        size={size || "md"}
        handler={handleOpen}
        className="p-8 text-center dialog"
      >
        <div className="flex justify-center">
          <Image src={bin} alt="" className="" unoptimized={true} width={80} />
        </div>
        <p className="text-lg text-black leading-[24px] font-montserrat pt-4 pb-6">
          Are you share you want to delete this number, this process is
          irreversible.
        </p>
        <div className="flex gap-5 justify-center">
          <button
            onClick={() => handleOpen(null)}
            className="button_bg h-[40px] px-16 font-semibold font-montserrat text-base text-white rounded-3xl"
          >
            Yes
          </button>
          <button
            onClick={() => handleOpen(null)}
            className="bg-[#F6722B] h-[40px] px-16 font-semibold font-montserrat text-base text-white rounded-3xl"
          >
            No
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default NumbersTable;

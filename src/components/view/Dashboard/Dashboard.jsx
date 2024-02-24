import NumbersTable from "@/components/ui/NumbersTable";
import Link from "next/link";
import React from "react";
import { BsListUl } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

const Dashboard = () => {
  return (
    <>
      <div className="header_shaddow font-montserrat">
        <div className="w-4/5 m-auto">
          <div className="flex justify-between items-center py-4">
            <div>
              <ul className="flex gap-20 items-center">
                <li className="font-semibold text-xl">
                  <Link href="/">Logo</Link>
                </li>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Activity</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold text-xl p-0">Tama Seel</h6>
              <span className="text-xs block mt-[2px]">Matlita Brown</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F4FB] py-10 h-screen">
        <div className="w-4/5 m-auto">
          <div className="flex justify-between items-center">
            <h4 className="text-pink font-semibold text-xl flex gap-1 items-center">
              <BsListUl /> Your WhatsApp Numbers
            </h4>
            <button className="button_bg flex gap-2 py-1.5 px-8 rounded-3xl text-white items-center font-medium text-xl">
              <FiPlus className="text-2xl" /> Add Number
            </button>
          </div>

                  {/* Table */}
        <NumbersTable/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

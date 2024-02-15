"use client";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Image from "next/image";
import ProgressBar from "@/components/ui/ProgressBar";

const Container = ({ children, h, mdh, xlh, reff }) => (
  <div
    ref={reff}
    className={`${h} ${mdh} ${xlh} pt-[70px] pl-4 mt-[20px] mb-[5px] bg-[#ffffff]`}
  >
    {children}
  </div>
);

const H2Tag = ({ children }) => (
  <h2 className="text-3xl font-semibold w-[80%] mb-6">{children}</h2>
);

const PTag = ({ children }) => (
  <p className=" w-[80%] font-base mt-4">{children}</p>
);

const DesignAndCollection = () => {
  const [percentvalue, setPercentvalue] = useState(0);
  const [selected, setSelected] = useState("");
  console.log("selected value:", selected)

  // const handleProgress = ()=> {
  //   if(selected){
  //     setPercentvalue(percentvalue + 10)
  //   }
  // }
  useEffect(()=> {
    if(selected){
      setPercentvalue(percentvalue + 10)
    }
  }, [selected])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setValue(oldValue => {
  //       const newValue = oldValue + 10;

  //       if (newValue === 100) {
  //         clearInterval(interval);
  //       }

  //       return newValue;
  //     });
  //   }, 1000);
  // }, []);

  // ref for the menu section
  const menuRef = useRef(null);

  // 4 refs for links
  // const menuRef1 = useRef(null);
  // const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);
  const menuRef4 = useRef(null);

  // function use to slide on menu item click
  function slideTo(reff) {
    reff.current.scrollIntoView({ behavior: "smooth" });
  }
  // setting the position of the menu div, absolute fixed
  const [menuPosition, setMenuPosition] = useState("absolute top-[56px]");

  const [active, setActive] = useState(null);

  useEffect(() => {
    function scrolll() {
      if (menuRef.current.getBoundingClientRect().top <= 0) {
        setMenuPosition("fixed top-[56px] ");
      }
      if (menuRef.current.getBoundingClientRect().top > 0) {
        setMenuPosition("absolute top-[56px]");
      }
      if (menuRef4.current.getBoundingClientRect().top < 0) {
        setMenuPosition("absolute bottom-[-56px] ");
      }

      // check for active menu item
      // if (
      //   menuRef1.current.getBoundingClientRect().top < 56 &&
      //   menuRef1.current.getBoundingClientRect().top >= 0
      // ) {
      //   setActive("menu1");
      // }
      // if (
      //   menuRef2.current.getBoundingClientRect().top < 56 &&
      //   menuRef2.current.getBoundingClientRect().top >= 0
      // ) {
      //   setActive("menu2");
      // }
      if (
        menuRef3.current.getBoundingClientRect().top < 56 &&
        menuRef3.current.getBoundingClientRect().top >= 0
      ) {
        setActive("menu3");
      }
      if (
        menuRef4.current.getBoundingClientRect().top < 56 &&
        menuRef4.current.getBoundingClientRect().top >= 0
      ) {
        setActive("menu4");
      }
    }

    window.addEventListener("scroll", scrolll);
    return () => {
      window.removeEventListener("scroll", scrolll);
    };
  }, []);

  return (
    <>
      {/* Section 2 */}
      <div className=" relative h-[1856px] bg-[#fafafa]">
        <div ref={menuRef} className="">
          <ul
            className={`h-[500px] w-[20%]   px-4 pt-10 
           ${menuPosition}`}
          >
            <li>
              <small
                onClick={() => {
                  setShowChildMenu(!showChildMenu);
                }}
                className="hover:text-[#1890ff]  font-semibold flex
                items-end justify-between 
                w-52 cursor-pointer"
              >
                Collection & Design
              </small>

              <ul className="space-y-3 py-3 px-4 ">
                <li>
                  <small
                    onClick={() => {
                      slideTo(menuRef3);
                    }}
                    className={`hover:text-[#1890ff] font-semibold cursor-pointer
                            ${
                              active === "menu3"
                                ? "text-[#1890ff]"
                                : "text-[#434343]"
                            }
                            `}
                  >
                    Collection
                  </small>
                </li>

                <li>
                  <small
                    onClick={() => {
                      slideTo(menuRef4);
                    }}
                    className={`hover:text-[#1890ff] font-semibold cursor-pointer
                            ${
                              active === "menu4"
                                ? "text-[#1890ff]"
                                : "text-[#434343]"
                            }
                            `}
                  >
                    Design List
                  </small>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="ml-[20%] absolute top-[56px]">
          <Container reff={menuRef3} h="h-[400px]">
            <H2Tag>Collection Master</H2Tag>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars" form="carform" value={selected} onChange={(e)=> setSelected(e.target.value)}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <ProgressBar value={percentvalue} max={100} />
          </Container>

          <Container reff={menuRef4} h="h-[400px]">
            <H2Tag className=" text-3xl font-semibold pb-6">
              Collection List
            </H2Tag>
            <PTag>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              deleniti illo a in distinctio ducimus, consequuntur aspernatur
              nihil quidem rem!
            </PTag>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars" form="carform" value={selected} onChange={(e)=> setSelected(e.target.value)}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </Container>
        </div>
      </div>
    </>
  );
};

export default DesignAndCollection;

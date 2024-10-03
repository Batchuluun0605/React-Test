"use client";
import React, { useState } from "react";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import Badge from "@/components/Badge";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Badge number={count} />
      </div>
      <button onClick={() => setCount((count) => count + 1)}>click</button>
      <div className="w-full  flex items-center justify-center min-h-screen">
        <div className="container1 flex justify-center items-center gap-4 ">
          <img src={img1.src} alt="" className=" img1 w-44 h-32 duration-300" />
          <img src={img2.src} alt="" className=" img1 w-44 h-32 duration-300" />

          <img src={img3.src} alt="" className=" img1 w-44 h-32 duration-300" />

          <img src={img4.src} alt="" className=" img2 w-44 h-32 duration-300" />
        </div>
      </div>
    </>
  );
};

export default page;

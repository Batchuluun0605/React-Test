"use client";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const color = useRef(0);
  const [name, setName] = useState("");
  const handleColor = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    color.current = color.current + 1;
  }, [name]);
  //   console.log(color.current);
  return (
    <div>
      <p role="button" onClick={handleColor}>
        color change
      </p>
      <input type="text" onChange={handleColor} />
      <div className="w-[200px] h-[200px]">Hello bro:{color.current}</div>
    </div>
  );
};

export default page;

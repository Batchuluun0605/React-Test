"use client";
import React, { useEffect, useRef, useState } from "react";

const page = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const nameRef = useRef("");

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
  };
  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "yellow";
  };
  const click = () => {
    console.log(nameRef.current.value);
    alert(nameRef.current.value);
  };
  return (
    <div>
      <button onClick={handleClick1}>click me</button>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick2}>click me</button>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick3}>click me</button>
      <input type="text" ref={inputRef3} />
      <input
        type="text"
        ref={nameRef}
        value={nameRef.current.value}
        className="border"
      />

      <button onClick={click}>click useRef value</button>
    </div>
  );
};

export default page;

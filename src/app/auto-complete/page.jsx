"use client";
import React, { useState } from "react";

const page = () => {
  const [search, setSearch] = useState("");
  const arr = [];

  const handleSubmit = () => {
    if (arr.length === 0) {
      arr.push({ search });
    }
  };

  return (
    <div>
      <div className="bg-green-500 w-[100px] h-[100px]">
        <ul>
          <li>{...arr}</li>
        </ul>
      </div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="px-10 py-2 bg-red-200 rounded-md"
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
};

export default page;

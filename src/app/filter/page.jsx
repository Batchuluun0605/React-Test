"use client";
import Radio from "@/components/Radio";
import data from "@/data";
import React, { useState } from "react";

const Page = () => {
  const [search, setSearch] = useState("");
  const [radio, setRadio] = useState("all");
  const [id, setId] = useState();
  // Filter data based on selected radio value
  const filteredData = data?.filter((item) => {
    if (radio == "all" && search === "") {
      return item;
    } else {
      return item.color.includes(radio) | item.color.includes(search);
    }
  });

  return (
    <div className="w-screen flex">
      {/* Sidebar */}
      <p>color:{id}</p>
      <div className="w-1/5 bg-green-200 p-4">
        <h1>Category</h1>
        <form>
          <legend>Category: {radio}</legend>
          <div className="flex flex-col gap-3">
            <Radio
              value="all"
              checked={radio}
              name="all"
              label="All"
              onChange={(e) => setRadio(e.target.value)}
            />
            <Radio
              value="blue"
              checked={radio}
              name="blue"
              label="Sneakers"
              onChange={(e) => setRadio(e.target.value)}
            />
            <Radio
              value="green"
              checked={radio}
              name="green"
              label="Flats"
              onChange={(e) => setRadio(e.target.value)}
            />
            <Radio
              value="red"
              checked={radio}
              name="red"
              label="Sandals"
              onChange={(e) => setRadio(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="w-4/5 bg-blue-200 gap-10 flex flex-col py-10 px-4">
        <div>
          <input
            type="text"
            className="outline-none py-2 px-4"
            placeholder="Enter your search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-10">
          {filteredData?.map((e) => (
            <div
              key={e.title}
              className="border p-6 bg-white flex flex-col gap-5"
              onClick={() => onClick(e.color)}
            >
              <img className="w-[200px] h-[100px]" src={e.img} alt={e.title} />
              <p>{e.category}</p>
              <div>{e.star}</div>
              <div className="flex justify-between">
                <p className="line-through">{e.prevPrice}</p>
                <p>{e.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

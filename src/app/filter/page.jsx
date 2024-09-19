"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const api = "https://fakestoreapi.com/products";
const page = () => {
  const pathname = usePathname();
  const [productsData, setProductsData] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState("");
  const categoryPath = searchParams.get("category") || "";
  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      setProductsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const handlePathname = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  console.log(categoryPath);
  const handleChcange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    router.push(`${pathname}?${handlePathname("category", e.target.value)}`);
  };
  const filterData = useMemo(() => {
    if (categoryPath) {
      return productsData.filter((product) =>
        product?.category.toLowerCase().includes(categoryPath.toLowerCase())
      );
    }
    return productsData;
  }, [categoryPath, productsData]);

  console.log(filterData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex gap-10">
      {/* sidebar */}
      <div className="flex w-1/6 flex-col  gap-4 bg-gradient-to-bl h-screen from-red-500 to-orange-500">
        <label htmlFor="" className="flex gap-2 text-[14px]">
          <input type="radio" value="small" />
          <p>1-2</p>
        </label>
        <label htmlFor="" className="flex gap-2 text-[14px]">
          <input type="radio" value="medium" />
          <p>2-3</p>
        </label>
        <label htmlFor="" className="flex gap-2 text-[14px]">
          <input type="radio" value="large" />
          <p>3-4</p>
        </label>
      </div>

      {/* content */}
      <div className="w-5/6">
        {/* input  */}
        <div className="fixed">
          {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="category to find"
              {...register("category")}
            />
            <input type="submit" />
          </form> */}
          <input
            type="text"
            placeholder="search..."
            value={categoryPath}
            onChange={handleChcange}
          />
        </div>

        <div className="w-full py-20">
          <div className="grid grid-cols-5 gap-8 px-6">
            {filterData?.map((product) => (
              <div
                key={product.id}
                className="py-4 px-4 border-2 flex flex-col gap-3 group justify-center items-center"
              >
                <h1>{product.category}</h1>
                <Image
                  src={product.image}
                  priority
                  alt={product.title}
                  width={80}
                  height={60}
                  className=" group-hover:scale-105 group-hover:drop-shadow-3xl duration-300"
                />
                <div className="flex  gap-2">
                  <p className=" font-semibold px-1">{product.rating?.rate}</p>
                  <p className="font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

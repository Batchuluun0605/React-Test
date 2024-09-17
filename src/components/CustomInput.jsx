import { useField } from "formik";
import { SearchIcon } from "lucide-react";
import React from "react";

const CustomInput = ({ svg, className, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1 w-[300px] ">
      <label
        className={`border-2 flex items-center  rounded-md py-1 px-2 bg-white ${
          meta.error && meta.touched ? "border-red-600" : "border-green-600"
        } ${className}`}
      >
        <div className="">{svg}</div>
        <input
          {...field}
          {...props}
          className="bg-white w-full px-2 outline-none "
        />
      </label>
      {meta.touched && meta.error && (
        <span className="text-red-500 text-[14px] flex flex-wrap ">
          {meta.error}
        </span>
      )}
    </div>
  );
};

export default CustomInput;

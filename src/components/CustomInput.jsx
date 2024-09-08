import { useField } from "formik";
import { SearchIcon } from "lucide-react";
import React from "react";

const CustomInput = ({ svg, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        className={`border-2 flex items-center rounded-md py-1 px-2 bg-white ${
          meta.error && meta.touched ? "border-red-600" : "border-green-600"
        }`}
      >
        <div className="">{svg}</div>
        <input
          {...field}
          {...props}
          {...meta}
          className="bg-white px-2 outline-none min-w-[280px]"
        />
      </label>
      {meta.touched && meta.error && (
        <span className="text-red-500 w-full">{meta.error}</span>
      )}
    </div>
  );
};

export default CustomInput;

import { useField } from "formik";
import React from "react";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox flex justify-center items-center gap-2 ">
        <input
          {...field}
          {...props}
          type="checkbox"
          className={` ml-3 h-5 w-5 ${
            meta.touched && meta.error ? "error-input" : ""
          }`}
        />
        <span className="text-white text-[18px]">
          I accept the terms of service
        </span>
        {meta.touched && meta.error && <p className="error">{meta.error}</p>}
      </div>
    </>
  );
};

export default CustomCheckbox;

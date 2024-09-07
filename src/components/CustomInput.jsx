import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...meta}
        type={props.type}
        placeholder={props.placeholder}
        className={` flex bodrer-2 eye w-full h-full py-6 border-green-900 justify-start px-1 text-[18px] bg-green-300 max-h-8 rounded- outline-none ${
          meta.touched && meta.error ? "error-input" : ""
        }`}
        // class="w3-input w3-border w3-round"
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export default CustomInput;

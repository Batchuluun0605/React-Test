import { useField } from "formik";
import { SearchIcon } from "lucide-react";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor="copy-button">{label}</label>
      <input
        {...field}
        {...meta}
        {...props}
        aria-label="copy-button"
        placeholder={props.placeholder}
        className={` flex bodrer-2 eye w-full h-full py-6 border-green-900 justify-start px-1 text-[18px] bg-green-300 max-h-8 rounded- outline-none ${
          meta.touched && meta.error ? "error-input" : ""
        }`}
      />
      <img src={props.image} alt="" />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
      <div
        className={
          "flex h-10 items-center rounded-md border border-input bg-white pl-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2"
        }
      >
        <SearchIcon className="h-[16px] w-[16px]" />
        <input
          {...props}
          type="search"
          // ref={ref}
          className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </>
  );
};

export default CustomInput;

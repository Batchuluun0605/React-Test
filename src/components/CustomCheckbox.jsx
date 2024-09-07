import { useField } from "formik";
import React from "react";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          type="checkbox"
          className={meta.touched && meta.error ? "error-input" : ""}
        />
        <span>I accept the terms of service</span>
        {meta.touched && meta.error && <p className="error">{meta.error}</p>}
      </div>
    </>
  );
};

export default CustomCheckbox;

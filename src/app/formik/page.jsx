"use client";
import { BasicSchema } from "@/Schema";
import { Form, useFormik } from "formik";
import React, { useState } from "react";

const onSubmit = () => {
  console.log("submitted");
};
function page() {
  const [state, setState] = useState(true);
  const { handleBlur, errors, touched, values, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: BasicSchema,
      onSubmit,
    });
  console.log(errors.email);
  return (
    <div className=" h-screen bg-sky-900 items-center flex justify-center ">
      <div className="flex flex-col items-center justify-center bg-green-600 rounded-md p-2">
        <div className="flex gap-10">
          <button
            onClick={() => setState(true)}
            className={state ? "text-white" : ""}
            value={state}
          >
            Basic
          </button>

          <button
            onClick={() => setState(false)}
            className={state ? "" : "text-white"}
          >
            Advansed
          </button>
        </div>
        <div className="p-20">
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            // onSubmit={handleSubmit}
            className="flex flex-col font-semibold gap-2"
          >
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email... "
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              class={errors.email ? "bg-red-600" : ""}
            />
            <label htmlFor="age">Age</label>
            <input
              placeholder="Enter your age... "
              id="age"
              type="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-2 py-1 rounded-md "
            />
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter your password... "
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-2 py-1 rounded-md "
            />
            <label htmlFor="confirmPassword">ConfirmPassword</label>
            <input
              placeholder="Enter your confirmPassword... "
              id="confirmPassword"
              type="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-2 py-1 rounded-md "
            />
            <button
              type="button"
              className="border rounded-md w-full px-2 py-1"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;

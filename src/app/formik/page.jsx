"use client";
import { BasicSchema, advancedSchema } from "@/Schema";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
function page() {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className=" h-screen bg-sky-900 items-center flex justify-center ">
      <div className="">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            correctTos: "",
          }}
          validationSchema={BasicSchema}
          onSubmit={onSubmit}
        >
          {(props, isSubmitting) => (
            <form
              onSubmit={props.handleSubmit}
              className="flex flex-col gap-10"
            >
              <h1 className="text-2xl font-semibold text-white m-auto">
                User Login
              </h1>
              <div className="flex flex-col gap-5 px-10">
                <CustomInput
                  name="email"
                  type="email"
                  placeholder="email"
                  // className="bg-red-600"
                />
                <div className="flex ">
                  <CustomInput
                    name="password"
                    type={showPassword ? "password" : "text"}
                    label=""
                  />
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye"
                      onClick={() => setShowPassword(false)}
                    >
                      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                      <path d="m2 2 20 20" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye"
                      onClick={() => setShowPassword(true)}
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </div>
                <CustomInput name="confirmPassword" type="password" label="" />
                <CustomCheckbox name="correctTos" label={""} />
                <input type="text" className="" />
                <button className="bg-cyan-500 hover:bg-cyan-600 py-2 rounded-full">
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default page;

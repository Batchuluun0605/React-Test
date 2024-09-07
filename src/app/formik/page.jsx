"use client";
import { BasicSchema, advancedSchema } from "@/Schema";
import CustomCheckbox from "@/components/CustomCheckbox";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
function page() {
  const [state, setState] = useState(true);
  const {
    handleBlur,
    isSubmitting,
    errors,
    touched,
    values,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: BasicSchema,
    onSubmit,
  });

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
          {state ? (
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
                className={errors.email && touched.email ? "error-input" : ""}
              />
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
              <label htmlFor="age">Age</label>
              <input
                placeholder="Enter your age... "
                id="age"
                type="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.age && touched.age ? "error-input" : ""}
              />
              <label htmlFor="password">Password</label>
              <input
                placeholder="Enter your password... "
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password ? "error-input" : ""
                }
              />
              <label htmlFor="confirmPassword">ConfirmPassword</label>
              <input
                placeholder="Enter your confirmPassword... "
                id="confirmPassword"
                type="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "error-input"
                    : ""
                }
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="border rounded-md w-full px-2 py-1"
              >
                submit
              </button>
            </form>
          ) : (
            <Formik
              initialValues={{ username: "", jobType: "", acceptedTos: false }}
              validationSchema={advancedSchema}
              onSubmit={onSubmit}
            >
              {(props, isSubmitting) => (
                <form onSubmit={props.handleSubmit}>
                  <CustomInput
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                  />
                  <CustomSelect
                    name="jobType"
                    label="job type"
                    placeholder="please select a job"
                  >
                    <option value="">Please select a job type</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="other">other</option>
                  </CustomSelect>
                  <CustomCheckbox type="checkbox" name="acceptedTos" />
                  {/* <Field type="text" name="name" placeholder="Name" /> */}
                  {/* <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="name"
                  />
                  {props.errors.name && (
                    <div id="feedback">{props.errors.name}</div>
                  )} */}
                  <button disabled={isSubmitting} type="submit">
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;

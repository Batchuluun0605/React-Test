"use client";
import { BasicSchema } from "@/Schema";
import CustomInput from "@/components/CustomInput";
import { Form, Formik } from "formik";
import { Lock, Mail, SearchIcon } from "lucide-react";
import React from "react";

const page = () => {
  //     const onSubmit = async (values, actions) => {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   actions.resetForm();
  // };
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={BasicSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form
            action=""
            className=" flex flex-col justify-center items-center gap-6"
          >
            <h1 className="text-xl font-semibold">login</h1>
            <CustomInput
              name="email"
              type="email"
              svg={<Mail />}
              label="email"
            />
            <CustomInput
              name="password"
              type="password"
              svg={<Lock />}
              label="password"
              className="flex-row-reverse"
            />
            <CustomInput
              name="confirmPassword"
              type="password"
              svg={<Lock />}
              label="confirmPassword"
            />
            <button
              className="px-4 py-1 border w-[300px] rounded-md bg-gradient-to-r from-red-500 to-orange-600 text-xl"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default page;

"use client";
import { BasicSchema } from "@/Schema";
import CustomInput from "@/components/CustomInput";
import { Formik } from "formik";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};
function page() {
  return (
    <div className=" h-screen bg-black items-center flex justify-center ">
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
              <CustomInput
                type="text"
                name="email"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="red"
                    class="h-6 w-6"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                }
              />
              <CustomInput
                name="password"
                placeholder="password"
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-eye-off"
                  >
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                    <path d="m2 2 20 20" />
                  </svg>
                }
              />
              <div className="flex flex-col gap-5 px-10">
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

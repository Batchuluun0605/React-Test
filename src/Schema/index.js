import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const BasicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),

  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Required"),
  // check: yup.boolean().oneOf([true], "Please accept the terms of service"),
});

export const advancedSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Required"),
  password: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"], "need")
    .required("Required"),
  confirmPassword: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});

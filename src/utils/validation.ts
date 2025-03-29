import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid Email').required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
})

export  const signupValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
})
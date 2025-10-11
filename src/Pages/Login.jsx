import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function Login() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/^\S*$/, "No spaces are allowed"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      toast.success("Login successful!");
      resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fdf1f0] px-4 sm:px-6 lg:px-12">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 sm:p-10 mt-15">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#D9077A] mb-6">
          Login
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9077A]"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D9077A]"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                    e.preventDefault();
                    formik.handleSubmit();
                    }
                }}
                />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white cursor-pointer py-3 rounded-full mt-4 font-medium hover:opacity-90 transition"
          >
            Login
          </button>
          <p className="text-center text-gray-600 mt-4">
            New user?{" "}
            <Link to="/signup" className="text-[#D9077A] font-medium hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

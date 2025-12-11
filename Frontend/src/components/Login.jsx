import React from "react";
import Signup from "./Signup";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-middle ">
        <form onSubmit={handleSubmit(onSubmit)} className="modal-box space-y-2">
          <div className="modal-action">
            <a href="/" className="btn outline-none">
              Close
            </a>
          </div>

          <h3 className="font-bold text-lg text-pink-500">Login </h3>
          {/* Email */}
          <div className="">
            <span>Email</span>
            <br />
            <input
              type="email"
              className="w-80 px-3 border rounded-md outline-none mx-2 focus:border-blue-500"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-600">
                This field is required
              </span>
            )}
          </div>
          {/* Passwerd */}
          <div>
            <span>Password</span>
            <br />
            <input
              type="text"
              className="w-80 px-3 border rounded-md outline-none mx-2 focus:border-blue-500"
              placeholder="Enter your Possword"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-600">
                This field is required
              </span>
            )}
          </div>
          {/* logon button and sign up */}
          <div className="flex  mt-4 justify-around ">
            <button
              type="submit"
              className="bg-pink-500 text-white border rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer"
            >
              Login
            </button>
            <p>
              Not Registered?{" "}
              <a
                href="/Signup"
                className="text-blue-500 underline cursor-pointer "
              >
                SignUp
              </a>
            </p>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Login;

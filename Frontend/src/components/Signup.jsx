import React from "react";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const userInfo = {
      fullname: data.name,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then(res => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup successfuly");
          navigate(from, { replace: true });
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch(error => {
        if (error.response) {
          console.log(error);
          toast.error(error.response.data.message);
        }
      });
  };
  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" space-y-2  rounded-md mt-28 p-5 w-[550px] outline-none shadow-2xl"
      >
        <div className="modal-action">
          <a href="/" className="btn outline-none">
            Close
          </a>
        </div>

        <h3 className="font-bold text-lg text-pink-500">Signup </h3>

        {/* Name */}
        <div className="">
          <span>Name</span>
          <br />
          <input
            type="text"
            className="w-80 px-3 border rounded-md outline-none mx-2 focus:border-blue-500"
            placeholder="Enter your full name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

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
            <span className="text-sm text-red-600">This field is required</span>
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
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>
        {/* logon button and sign up */}
        <div className="flex  mt-4 justify-around ">
          <button
            type="submit"
            className="bg-pink-500 text-white border rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer"
          >
            Signup
          </button>
          <p>
            Have Account?{" "}
            <button
              className="text-blue-500 underline cursor-pointer "
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Login
            </button>
          </p>
          <Login />
        </div>
      </form>
    </div>
  );
}

export default Signup;

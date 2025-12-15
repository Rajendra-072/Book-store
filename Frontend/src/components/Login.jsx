import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then(res => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successfully");
          document.getElementById("my_modal_5").close();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
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
    <dialog id="my_modal_5" className="modal modal-middle">
      <div className="modal-box space-y-2">
        <div className="modal-action">
          <button
            type="button"
            className="btn outline-none"
            onClick={() => document.getElementById("my_modal_5").close()}
          >
            Close
          </button>
        </div>

        <h3 className="font-bold text-lg text-pink-500">Login</h3>

        {/* Email */}
        <div>
          <span>Email</span>
          <br />
          <input
            type="email"
            className="w-80 px-3 border rounded-md outline-none mx-2 focus:border-blue-500"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        {/* Password */}
        <div>
          <span>Password</span>
          <br />
          <input
            type="password"
            className="w-80 px-3 border rounded-md outline-none mx-2 focus:border-blue-500"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-sm text-red-600">This field is required</span>
          )}
        </div>

        <div className="flex mt-4 justify-around">
          <button
            onClick={handleSubmit(onSubmit)}
            className="bg-pink-500 text-white border rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer"
          >
            Login
          </button>

          <p>
            Not Registered?{" "}
            <a href="/Signup" className="text-blue-500 underline">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </dialog>
  );
}

export default Login;

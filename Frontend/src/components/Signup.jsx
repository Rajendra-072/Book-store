import React from "react";
import Login from "./Login";
function Signup() {
  return (
    <div className="flex items-center justify-center ">
      <div className=" space-y-2  rounded-md mt-28 p-5 w-[550px] outline-none shadow-2xl">
        <div className="modal-action">
          <a href="/">
            <button className="btn outline-none">Close</button>
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
          />
        </div>

        {/* Email */}
        <div className="">
          <span>Email</span>
          <br />
          <input
            type="email"
            className="w-80 px-3 border rounded-md outline-none mx-2 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* OTP */}
        <div className="">
          <span>OTP</span>
          <br />
          <input
            type="text"
            maxLength={6}
            className="border w-48 h-5 mx-2 text-x rounded-md px-3 focus:border-blue-500"
            placeholder="Enter OTP"
          />
        </div>

        {/* Passwerd */}
        <div>
          <span>Password</span>
          <br />
          <input
            type="text"
            className="w-80 px-3 border rounded-md outline-none mx-2 focus:border-blue-500"
            placeholder="Enter your Possword"
          />
        </div>
        {/* logon button and sign up */}
        <div className="flex  mt-4 justify-around ">
          <button className="bg-pink-500 text-white border rounded-md px-3 py-1 hover:bg-pink-700 cursor-pointer">
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
      </div>
    </div>
  );
}

export default Signup;

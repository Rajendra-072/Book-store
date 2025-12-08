import bannerImg from "../../public/banner img.png";

import React from "react";

function Banner() {
  return (
    <div className=" w-full md:pl-10 md:pr-6 my-8 flex flex-col md:flex-row">
      <div className="order-2 md:order-1 w-full md:w-1/2 ">
        <div className="space-y-10 md:space-y-12 mt-10 md:mt-20 ">
          <h1 className="text-2xl md:text-4xl font-bold">
            Hello, Welcome here to learn something{" "}
            <span className="text-orange-600">New Everyday!!</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            voluptates ut dolore possimus nesciunt adipisci sit quisquam iure
            totam fugiat ipsam saepe, dignissimos
          </p>

          <div>
            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
            <div>
              <button className="btn  btn-secondary mt-2">Secondary</button>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 w-full md:w-1/2  mt-10 md:mt-20 flex justify-center">
        <img src={bannerImg} className="w-92 h-92" alt="banner image" />
      </div>
    </div>
  );
}

export default Banner;

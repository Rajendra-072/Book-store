import React from "react";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

function Cource() {
  const [books, setbook] = useState([]);

  useEffect(() => {
    const getbooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/Book");
        console.log("API DATA:", res.data);
        setbook(res.data); // <-- FIXED
      } catch (error) {
        console.log("API Error:", error);
      }
    };
    getbooks();
  }, []);

  return (
    <div className="w-full md:pl-10 md:pr-6 my-8 ">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>

        <p className="mt-10">
          BookStore is a community-driven discovery service that indexes and
          provides access to scholarly, peer-reviewed open access books and
          helps users to find trusted open access book publishers.
        </p>

        <a href="/">
          <button className="bg-pink-500 text-white py-1 px-4 rounded-md mt-6 cursor-pointer hover:bg-pink-700">
            Back
          </button>
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {books.map(item => (
          <Cards item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default Cource;

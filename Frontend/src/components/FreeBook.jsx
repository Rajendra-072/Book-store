import React from "react";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FreeBook() {
  const [books, setbook] = useState([]);

  useEffect(() => {
    const getbooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/Book");
        const Data = res.data.filter(data => data.category === "Free");
        setbook(Data); // <-- FIXED
      } catch (error) {
        console.log("API Error:", error);
      }
    };
    getbooks();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-full md:pl-10 md:pr-6 z-50 my-8">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offerd Cources</h1>
        <p>
          we believe in the power of stories to enrich lives. With fast
          shipping, exceptional customer service, and a user-friendly shopping
          experience, we strive to make your book-buying journey enjoyable and
          effortless. Join our community of readers and discover your next great
          read today!
        </p>
      </div>
      <Slider {...settings}>
        {books.map(item => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default FreeBook;

import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function FreeBook() {
  const filterData = list.filter(data => data.category === "Free");

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
        {filterData.map(item => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default FreeBook;

import React from "react";

function Cards({ item }) {
  return (
    <div className="card bg-base-100 w-93  shadow-sm my-5 space-x-2 ">
      <figure>
        <img src={item.image} className="h-80" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.titel}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-300 py-3.5 cursor-pointer">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

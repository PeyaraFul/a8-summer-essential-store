import React from "react";
import { productsData } from "../lib/Data.jsx";
import Image from "next/image.js";

const Popular = async () => {
  const products = await productsData();

  return (
    <>
      <h1 className="text-2xl mt-6 font-bold text-center">Popular Prosucts</h1>
      <div className="grid grid-cols-3 ">
        {products.map((product) => (
          <div key={product.id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <Image
                className=" rounded-md"
                width={200}
                height={200}
                src={product.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <div className="rating">
                <div className="mask mask-star" aria-label="2 star"></div>
                <div className="mask mask-star" aria-label="2 star"></div>
                <div
                  className="mask mask-star"
                  aria-label="3 star"
                  aria-current="true"
                ></div>
                <div className="mask mask-star" aria-label="4 star"></div>
                <div className="mask mask-star" aria-label="5 star"></div>
              </div>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Popular;

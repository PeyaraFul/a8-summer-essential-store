import Image from 'next/image';
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div>
            <div  className="card bg-base-100 w-96 shadow-sm border border-amber-600 p-4 my-4 ">
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
              
              <label className="label">
                <span className="label-text">Rating: {product.rating}</span>
              </label>
              <input type="range" min={0} max='5'  step={0.1} defaultValue={product.rating} className="range range-accent range-sm bg-green-200 pointer-events-none" />
              <p>{product.description}</p>
              <span className="font-bold text-xl"> ${(product.price).toFixed(2)}</span>
              <div className="card-actions">
                <button className="btn btn-info w-full"> See Details</button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ProductCard;
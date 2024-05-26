"use client";
import getProducts from "@/app/lib/getProducts";
import Image from "next/image";
import React from "react";

export default async function categories({ params: { productsId } }: Params) {
  const Allproducts = await getProducts();
  const products: Product[] = [];
  Allproducts.products.map((product: Product) => {
    if (product.category === productsId.toLowerCase()) {
      products.push(product);
    }
  });

  const content = products.map(
    ({
      brand,
      category,
      description,
      discountPercentage,
      id,
      images,
      price,
      rating,
      stock,
      thumbnail,
      title,
    }) => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const randomKey = images[randomIndex];
      return (
        <div
          className="rounded-lg bg-[#BDBD93] p-[10px] w-[250px] flex flex-col gap-3 justify-between"
          key={id}
        >
          <div className="self-center">
            <Image
              src={randomKey}
              alt="1"
              width={210}
              height={210}
              className="object-cover w-[200px] h-[200px]"
            />
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-lg font-semibold">
              Title: <span className="text-red-800">{title}</span>
            </h4>

            <p>
              Brand: <span className="text-red-800">{brand}</span>
            </p>

            <p>
              Category: <span className="text-red-800">{category}</span>
            </p>

            <p>
              Description:<span className="text-red-800">{description}</span>
              <a href="product.html?1">...</a>
            </p>

            <p>
              DiscountPercentage:{" "}
              <span className="text-red-800">{discountPercentage}</span>
            </p>

            <p>
              Price:<span className="text-red-800"> {price}</span> Rating:
              <span className="text-red-800"> {rating} </span>Stock:
              <span className="text-red-800">{stock}</span> Id:
              <span className="text-red-800"> {id}</span>
            </p>
          </div>
          <div className="button">
            <a href="product.html?1">
              <button className="px-4 py-2 rounded-md font-medium transition-all duration-300 bg-gray-600 text-white hover:bg-red-800 hover:scale-95">Buy now</button>
            </a>
          </div>
        </div>
      );
    }
  );
  return (
    <div className="flex flex-wrap justify-center py-3 gap-4">{content}</div>
  );
}

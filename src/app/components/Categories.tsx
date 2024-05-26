import React from "react";
import Link from "next/link";
import getProducts from "../lib/getProducts";
import Image from "next/image";

export default async function Categories() {
  const categories: string[] = [];
  const { products } = await getProducts();
  const randProduct: Product = products[Math.floor(Math.random() * products.length)];
  products.map(({ category }: Product) => {
    const capitalizedString: string =
      category.charAt(0).toUpperCase() + category.slice(1);
    if (categories.indexOf(capitalizedString) === -1) {
      return categories.push(capitalizedString);
    }
  });

  console.log(categories);
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center items-center py-14">
        <Link
          href={`/products`}
          className="px-2 border text-white text-lg text-center rounded-md me-2 hover:text-black hover:bg-white transition-all"
        >
          All
        </Link>
        {categories.map((category, index) => {
          return (
            <div key={index} className="flex justify-center items-center gap-3">
              <div className="w-[2px] h-[20px] bg-white"></div>

              <Link
                href={`/products/${category}`}
                className="px-2 border text-white text-lg text-center rounded-md me-2 hover:text-black hover:bg-white transition-all"
              >
                {category}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 rounded-xl bg-white mx-16 mb-16 py-5 px-2">
        <Image className="max-w-42 max-h-42 object-cover" src={randProduct.images[Math.floor(Math.random() * randProduct.images.length)]} width={250} height={250} alt={randProduct.title} />
        <div className="flex flex-col gap-3 items-start flex-1">
          <h3 className="font-bold text-2xl">{randProduct.title}</h3>
          <p>{randProduct.description}</p>
          <button className="px-4 py-2 rounded-md font-medium transition-all duration-300 bg-gray-600 text-white hover:bg-red-800 hover:scale-95">Shop Now</button>
        </div>
      </div>
    </>
  );
}
